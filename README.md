# Lunadon - Windows XP Theme for Mastodon

[Official Lunadon Instance](https://lunadon.org)

<p align="center">
    <a href="https://lunadon.org">
      <img src="docs/lunadon.png" alt="Lunadon" />
    </a>
</p>

This repo contains the source code for a patch set that themes a standard [Mastodon](https://github.com/mastodon/mastodon) instance in a Windows XP theme.

## Applying the patch

Running the `patch.sh` script will apply the patch. The patch script assumes:

* You are using the [admin install instructions](https://docs.joinmastodon.org/admin/install/) for installation.

```sh
# Clone this repo.
git clone https://github.com/assemblylangauge/lunadon

# Run the patch. This will patch the `../live` directory.
cd lunadon
chmod +x ./patch.sh
./patch.sh
```

## License

Patches (C) AssemblyLanguage 2022, Licensed under the GNU AGPLv3.

[Mastodon](https://github.com/mastodon/mastodon) Licensed under the GNU AGPLv3. See their repository for additional licensing info.

This project is not affiliated with Mastodon or Microsoft.
