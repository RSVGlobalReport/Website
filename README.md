# RSV Global Website

Page Generator: `Jekyll`

Hosted on: `Github Pages`

Base Theme: `Chirpy`

## Prerequisites for local development

Follow the instructions in the [Jekyll Docs](https://jekyllrb.com/docs/installation/) to complete the installation of `Ruby`, `RubyGems`, `Jekyll` and `Bundler`.

## Running locally

Once the prerequisites are met you can run this site locally with:

```
$ jekyll build
$ jekyll serve
```

## Adding a new data version

Change `/_posts/2023-01-21-dashboard.md` - line:11
```md
{% assign archives = "<YOUR-DATA-VERSION-HERE> 02-01-2023" | split: " " %}
```

Use `/assets/data/02-01-2023/` as a base for the new version. Any deviation to this will require development.

Add new files to:
```yaml
- /assets/data/{YOUR-DATA-VERSION-HERE}/
```

The country name `Côte d'Ivoire` in the filename needs to be renamed to `Cote` due to symbol issues.

Example: `CountryCovid_Côte d'Ivoire.html` becomes `CountryCovid_Cote.html`
