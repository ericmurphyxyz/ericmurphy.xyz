---
title: "Obsessing Over Optimizing Web Images"
date: 2023-07-27
---

I have a confession to make. I'm obsessed with optimizing images. Images are the biggest oversight for a lot of websites. I'll see blogs that obsess about minimalism and using as little JavaScript as possible, only to have huge, uncompressed images served in outdated formats. It's very common to see images that are 300 KB that could be reduced to 100 KB or less with no quality loss.

If you've ever thought about resizing and optimizing images for your website manually, it sounds like an impossible task. Thankfully, with modern web frameworks, you don't need to. You can write some code to automate it once and never think about it again.

For perfect images, there are a few things we need to get right.

1. **Size them correctly.** If the `max-width` of your website is `960px`, then there's no reason to serve images with a width larger than that. Similarly, if it's a thumbnail, serve a thumbnail-sized image.
2. **Serve them in modern formats.** The WebP image format has been around forever, and is [supported by every modern browser](https://caniuse.com/webp). It can often cut in half the file size of a JPEG or PNG image with no discernible quality loss. You can also add a fallback to a JPEG or PNG image for the few ancient browsers that don't support WebP.
3. **Lazy load them.** This is a new feature that was recently added natively to HTML, but it makes a huge difference if you have a ton of images on one page that don't need to be loaded immediately. As the user scrolls down the page, they will be loaded in as they scroll into view.
4. **Set the correct width and height.** If you don't set these, when the image loads [it will shift the surrounding content](https://web.dev/optimize-cls/#images-without-dimensions), resulting in an annoying, jerky experience for users.
5. **Set the `alt` text.** This is just common courtesy for users who use a screen reader. Even for purely selfish reasons, it can help you rank higher in search results. It will also be displayed if, for whatever reason, the image doesn't load. It's really very little work and just requires you to write a sentence describing the image.

That sounds like a lot to worry about, but we can automate most of these so that loading optimized images is a no-brainer.

## Writing the Code

I personally use Hugo as the framework for this website. With Hugo, I'm able to do all of this automatically.

But of course, this isn't exclusive to Hugo. As an example, [Astro](https://astro.build/) comes with a component that does a lot of the same optimization for you. You'll need to adjust the code to the framework you're using, but the principles remain the same.

For Hugo, this is the code that I use that does all the magic:

```go-html-template
{{ $src := .Page.Resources.GetMatch (printf "%s" (.Destination | safeURL)) }}

{{ if $src }}
<figure>
  {{ $data := newScratch }}

  {{ if gt $src.Width 1100 }}
    {{ $data.Set "webp" ($src.Resize "960x webp q90") }}
    {{ $data.Set "fallback" ($src.Resize "960x q90") }}
  {{ else }}
    {{ $data.Set "webp" ($src.Resize (printf "%dx%d webp q90" $src.Width $src.Height)) }}
    {{ $data.Set "fallback" ($src.Resize (printf "%dx%d q90" $src.Width $src.Height)) }}
  {{ end }}

  {{ $webp := $data.Get "webp" }}
  {{ $fallback := $data.Get "fallback" }}

  <a href="{{ $src }}">
    <picture>
      <source srcset="{{ $webp.RelPermalink }}" type="image/webp">
      <img src="{{ $fallback.RelPermalink }}" alt="{{ .Text }}" loading="lazy" decoding="async" width="{{ $src.Width }}" height="{{ $src.Height }}" />
    </picture>
  </a>
  {{ with .Title }}<figcaption>{{ . | markdownify }}</figcaption>{{ end }}
</figure>
{{end}}
```

If you're using Hugo, you can save this under `/layouts/_default/_markup/render-image.html` and it will automatically optimize every image in any Markdown file. It's that easy! Of course, you could also adapt this to a shortcode or a partial as well.

This code is doing a lot for us, but let's break it down.

First, it reads the image from the page's resources. You'll need to [keep your images in the same directory as the post](https://gohugo.io/content-management/page-bundles/#leaf-bundles) for this to work.

If the image is wider than `960px`, it will resize it to `960px`. Otherwise, it will keep the image size the same and just convert it to WebP. (It will also optimize the fallback image for browsers that don't support WebP a bit.)

I also wrap the image in a link to the original, unoptimized version of the image. Some people *absolutely hate* WebP images because they aren't well-supported in editing software, so if they want to download them, it's better to let them use the original photo.

It's using `loading="lazy"` to only load the image if it's inside the viewport. This works in [all modern browsers](https://caniuse.com/loading-lazy-attr), but will just load like a normal image tag if not supported. This is only needed for images that are off-screen when the page loads.

`decoding="async"` should give you a small performance boost [for off-screen images](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding#usage_notes), so use this for images you lazy load. I'm not sure if it makes a big difference, but it might help a bit. It's supported in [all modern browsers](https://caniuse.com/mdn-html_elements_img_decoding).

The width and height is automatically set as well. To keep the image's aspect ratio on smaller screens, set `max-width: 100%` and `height: auto` in your CSS.

Finally, I add the alt text and (optionally) a caption underneath.

You can then just write images like normal in your markdown:

```markdown
![An orange tabby cat lying on the floor](cat.jpg "Photo by Michael Sum on Unsplash.")
```

All said and done, the image will look like this:

![An orange tabby cat lying on the floor](cat.jpg "Photo by [Michael Sum](https://unsplash.com/@michaelsum1228) on [Unsplash](https://unsplash.com/).")

This image is only 71 KB, compared to the original, unoptimized, 279 KB image.

## Do you really need a fallback?

For simplicity's sake, I considered leaving out the fallback JPEG/PNG image and only serving WebP images. [Every modern browser](https://caniuse.com/webp) has supported WebP for ages, and if you have a blog like this with a technical audience, I can guarantee that 99.9% of your visitors will be able to display WebP images in their browser.

At the same time, including a fallback image is trivial, and I would recommend it unless, for some reason, your server is really low on disk space. I like the idea that my website can be accessible to everyone, even if they're using an old version of Safari on an ancient Mac.

But if you want to make things simple and only serve WebP images, you'll probably be fine.

## But you can optimize it *even more!*

I've tried out additional optimizations, like also serving images in the [AVIF format](https://www.youtube.com/watch?v=5eGN_94zbKo) for even more file size savings. But the image format is just too new and the tooling is not there. There's no way for me to have Hugo automatically generate AVIF images or any other next-gen format. Plus, these next-gen formats like AVIF currently still have [spotty browser support](http://caniuse.com/avif). There are some people who have written a Bash script that will automatically generate all of your website's images in AVIF since Hugo won't do it for you, but for me, this is getting too complex. It's just not worth the hassle, in my opinion. Maybe in the future, but for now, I think we can skip these.

You can also [generate an array of different sizes](https://www.youtube.com/watch?v=7ZxhLpTVI24) for the same image. For example, instead of just having one `960px` wide image, you can also have a `360x` wide image that loads on mobile-sized screens. You can even make one for tablets, for retina screens, and so on and so forth, but again, this is getting too complex for me. If you have a significant amount of mobile traffic, it may be worth it, but it's not for me.

My solution gets me 90% of the way there, and to me, that's already quite far. I don't think it's really worth it to try to wring out the last few drops of optimization.
