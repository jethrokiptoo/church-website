# Hope Celebration Center Member Registration

A responsive member registration site for Hope Celebration Center. The form collects contact details, age, youth/adult group, and (for youth) marital status.

## Registration and email workflow

After a member is registered, the site downloads a CSV spreadsheet containing all registrations made during the current page session and opens a prefilled email to `jethrokiptoo0@gmail.com`. Attach the downloaded `hope-celebration-center-members.csv` file to the email before sending.

This browser-only app does not send emails or attach files automatically. Registrations are held in page memory and are cleared when the page is refreshed or closed. Download the spreadsheet before leaving the page.

## Run locally

Install dependencies with `npm install`, then start the Vite development server with `npm run dev`. Create a production bundle with `npm run build`.

## Publish on Netlify

1. Sign in to Netlify and open [Netlify Drop](https://app.netlify.com/drop).
2. In this project folder, run `npm run build`.
3. Upload the generated `dist` folder to Netlify Drop. Netlify will provide a public `*.netlify.app` address.

For ongoing automatic deployments, put this project in a GitHub repository and import that repository into Netlify. The included `netlify.toml` sets the build command and publish directory.

The site allows search-engine crawling, but appearing in Google results is not immediate or guaranteed. After deployment, submit the public URL through Google Search Console to request indexing.
