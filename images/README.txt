This folder (images/) is for your source design assets and inspiration.

For images that will be displayed on your website, please follow this organization structure within the 'public' directory of your project:

1. General Website Images:
   - Place images like your profile picture, the default social media preview image (OG image), and any general hero backgrounds into:
     public/img/general/
   - Example names:
     public/img/general/profile.jpg
     public/img/general/og-image.png
     public/img/general/hero-background.webp

2. Project-Specific Images:
   - Create a subfolder for each project within:
     public/img/projects/
   - Name each subfolder using the project's URL-friendly "slug" (e.g., if your project URL is /projects/awesome-project, the folder is public/img/projects/awesome-project/).
   - Inside each project's folder (e.g., public/img/projects/awesome-project/):
     - Thumbnail Image: Use 'thumbnail.jpg' (or .png, .webp) for the image that appears in project listings.
       Example: public/img/projects/awesome-project/thumbnail.jpg
     - Detail Images: Use 'detail-1.jpg', 'detail-2.jpg', etc., for images shown on the project's dedicated detail page.
       Example: public/img/projects/awesome-project/detail-1.jpg
     - Banner Image (Optional): If a project detail page has a unique large banner, you can name it 'banner.jpg'.
       Example: public/img/projects/awesome-project/banner.jpg

Naming Scheme for Image Files:
- Use lowercase letters.
- Separate words with hyphens (e.g., 'my-cool-image.jpg').
- Be descriptive but concise.

Workflow:
1. Create or source your image.
2. Optimize it for the web (correct dimensions, file size, format like JPG, PNG, WebP).
3. Name it according to the scheme above.
4. Place it into the correct subfolder within 'public/img/'.
5. The website code will be updated to look for images in these new locations. If an image is not found, it will appear broken on the site.

Example - For a project "Elevate Wellness" (slug: elevate-wellness):
- Thumbnail for project list: public/img/projects/elevate-wellness/thumbnail.jpg
- First detail image: public/img/projects/elevate-wellness/detail-1.jpg

By following this structure, you'll keep your project images organized and make it easy to update them. 