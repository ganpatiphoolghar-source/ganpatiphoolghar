# Bappa Phool Bazaar — website

A simple, self-contained website for a seasonal Ganesh Chaturthi flower
business. No payment gateway — customers order online and pay **cash on
delivery**. Every order is saved as a row in a Google Sheet.

## Files

```
index.html          Page structure
css/style.css        All styling
js/config.js          Shop name, contact info, delivery settings — edit this
js/products.js        Fallback product list, used only if the Sheet is unreachable
js/app.js             Site logic (search, cart, checkout, order submission)
apps-script/Code.gs   Paste into Google Apps Script — handles orders AND products
```

Products now live in a **Products** tab in your Google Sheet, editable
without touching any code — see step 3 below.

**If you deployed `Code.gs` before this update:** you need to redeploy it
so the new products, customer tracking, and admin console features are
live. In Apps Script: paste the latest `apps-script/Code.gs` over your
existing code, then **Deploy > Manage deployments > pencil icon >
Version: New version > Deploy**. Your existing `ordersEndpoint` URL in
`js/config.js` stays the same — you don't need to update it. Don't
forget to also set the `ADMIN_PASSWORD` Script Property described in
step 5, or the admin login will always say "incorrect password."

## 1. Connect the Google Sheet (so orders get saved)

1. Go to [sheets.google.com](https://sheets.google.com) and create a new,
   blank spreadsheet. Name it something like "Bappa Phool Bazaar Orders".
2. Rename the first tab (bottom-left) to **Orders**.
3. In the menu, go to **Extensions > Apps Script**.
4. Delete any placeholder code in the editor, then open `apps-script/Code.gs`
   from this project, copy all of it, and paste it into the Apps Script
   editor.
5. Click **Deploy > New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Description: "Orders endpoint" (or anything).
   - Execute as: **Me**.
   - Who has access: **Anyone**.
   - Click **Deploy**.
6. Google will ask you to authorize the script — approve it (it's your own
   script, this is expected). You'll see a warning screen saying "Google
   hasn't verified this app" — click **Advanced > Go to (project name)** to
   continue, since you're the author.
7. Copy the **Web app URL** it gives you (ends in `/exec`).
8. Open `js/config.js` and paste that URL into `ordersEndpoint`:

   ```js
   ordersEndpoint: "https://script.google.com/macros/s/AKfycb.../exec",
   ```

9. Save. From now on, every order placed on the site will appear as a new
   row in the **Orders** tab of your spreadsheet, with the order ID, name,
   phone, address, pincode, items ordered, and total.

**Note:** if you ever edit and redeploy `Code.gs`, choose **Deploy > Manage
deployments > Edit > New version** — a plain save doesn't push the change
live.

## 2. Edit the shop details

Open `js/config.js` and update:

- `shopName`, `tagline`, `season`
- `phoneDisplay`, `whatsappNumber`, `email`
- `deliveryAreas`, `deliveryNote`, `deliveryCharge`

## 3. Manage products from the Google Sheet

Once you've connected the Sheet (step 1 above), products are managed
entirely from a **Products** tab in the same spreadsheet — no code
required for day-to-day changes.

**First-time setup:** open your live site once (or visit
`YOUR_APPS_SCRIPT_URL/exec?action=products` directly in a browser). This
automatically creates a "Products" tab in your spreadsheet and fills it
with the current 15 starter products, so you're never starting from an
empty sheet.

After that, open the **Products** tab and edit it like any spreadsheet:

| Column         | What it means                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ID             | Unique short code, no spaces (e.g. `marigold-haar`). Only needed internally — never shown to customers.                                          |
| Name           | Product name shown on the site.                                                                                                                  |
| Category       | Short id used for filtering, e.g. `garlands`, `puja`, `handmade`. Use the same value across all products in that group.                          |
| Category Label | The label shown on the filter chip, e.g. "Garlands", "Handmade Decor".                                                                           |
| Price          | Number, in rupees.                                                                                                                               |
| Unit           | e.g. "per garland (5 ft)", "per kg", "per piece".                                                                                                |
| Image          | Path to a photo, e.g. `images/marigold-garland.jpg` — see the images/ folder in this project. Leave blank to show a drawn icon instead.          |
| Icon           | Fallback icon shown if the image is missing. One of: marigold, rose, lotus, durva, belpatra, mala, rangoli, leaf, diya, lantern, backdrop, jute. |
| Description    | One short line shown on the tile.                                                                                                                |
| In Stock       | Checkbox — untick to hide the "Add" button for that item.                                                                                        |
| Featured       | Checkbox — tick to show a "Popular" badge.                                                                                                       |

To add a brand-new product, just add a new row with a unique ID. To
temporarily pull an item, untick "In Stock" — no need to delete the row.
Changes appear on the site the next time someone loads (or refreshes)
the page — there's no publishing step.

**If the Sheet is ever unreachable** (e.g. Apps Script is redeploying, or
there's a network hiccup), the site automatically falls back to the
starter list built into `js/products.js`, so customers never see a
broken page. That file is optional to keep updated — it's just a safety
net.

## 4. Customer records & returning-customer auto-fill

Every order also updates a **Customers** tab in the same spreadsheet —
one row per phone number, with their latest name/address/pincode and
running totals for **Total Orders** and **Total Spent**. It's created
automatically the first time an order comes in, so there's nothing to
set up.

On the site, once someone types a full 10-digit phone number at
checkout, it's checked against this list — if they've ordered before,
their name, address, and pincode are filled in automatically (only into
empty fields, so it never overwrites something they've already typed).

**Worth knowing:** since the site has no login system, a phone number is
the only key used to look up saved details. This is a convenience
feature for a small, low-risk seasonal shop — it means anyone who knows
or guesses a past customer's phone number could see the address saved
against it. If that's a concern, you can turn the auto-fill off by
removing the `custPhone` input listener block in `js/app.js` (search for
`lookupReturningCustomer`) — orders will still save fine either way.

## 5. Set up the admin console

The site has an admin button (top-right, shield icon) where you can log
in and add new products from your phone or laptop — no spreadsheet
required for that part, though you can still use the Sheet too.

1. In the Apps Script editor (where you pasted `Code.gs`), click the
   gear icon on the left sidebar for **Project Settings**.
2. Scroll to **Script Properties** and click **Add script property**.
3. Set the key to `ADMIN_PASSWORD` and the value to a password you
   choose. Click **Save**.
4. That's it — the password lives only in this Script Property, never in
   any file you push to GitHub, so it stays private even though your
   repo (and `Code.gs`) may be public.

On the site, click the shield icon top-right, enter that password, and
you'll see every product currently in your Sheet plus a form to add a
new one. New products are saved straight to the **Products** tab.

**To change the password later:** just edit the value of that same
Script Property — no redeploy needed.

## 6. Put it online

This is a static site (just HTML/CSS/JS), so any of these work and are
free:

- **GitHub Pages** — create a repo, upload these files, turn on Pages in
  the repo settings.
- **Netlify / Vercel** — drag-and-drop the project folder onto their
  dashboard.
- **Google Sites / Firebase Hosting** — also work well if you're already
  in the Google ecosystem.

However you host it, just make sure all the files keep the same folder
structure (`css/`, `js/` alongside `index.html`).

## How orders work

1. Customer searches/browses products and adds items to the cart.
2. They fill in name, phone, **delivery address (required)**, and pincode.
3. They place the order — no card or UPI details are collected anywhere.
4. The order is sent straight to your Google Sheet and a confirmation with
   an order ID is shown on screen.
5. You deliver the flowers and collect cash in person.

## Testing before you connect the Sheet

The site works fully (search, cart, checkout, confirmation) even before
you've set up `ordersEndpoint` — it'll just log a warning in the browser
console instead of saving the order, so you can try the whole flow first.
#   g a n p a t i p h o o l g h a r  
 