# Gakumas-Localify-EN

- Gakuen iDOLM@STER Localization Module
- An English version of [gakuen-imas-localify](https://github.com/chinosk6/gakuen-imas-localify)

# Usage

- This is an Xposed Module.
- For Magisk users use [LSPosed](https://github.com/LSPosed/LSPosed).
- For Non-Root users use [LSPatch](https://github.com/LSPosed/LSPatch).

- Enable `Force Update Resource`

# Download
You can download the latest build from the GitHub Actions artifacts.

1. Go to the [GitHub Actions](https://github.com/NatsumeLS/Gakumas-Localify-EN/actions) page.
2. Find the most recent workflow run.
3. Click on the workflow run to view details.
4. In the "Artifacts" section at the bottom of the page, download the `GakumasLocalify` artifact.

# Localization
[Gakumas-Translation-Data-EN](https://github.com/NatsumeLS/Gakumas-Translation-Data-EN)

- Localization files are placed in `/app/src/main/assets/gakumas-local`
- `local-files/localization.json` is for Localization translation.
- `local-files/generic.json` is for translation of parts not covered by Localization.
- All `.json` files in the `local-files/genericTrans` folder function the same as `generic.json`. Folder and file names can be customized to to distinguish translation content.
- The `local-files/resource` folder stores resource files. Currently, all txt files with the same name can be replaced.
- To obtain the original game resources, Check [gkmasToolkit](https://github.com/kishidanatsumi/gkmasToolkit)

# Translation Contributors

<a href="https://github.com/NatsumeLS/Gakumas-Translation-Data-EN">
  <img src="https://contrib.rocks/image?repo=NatsumeLS/Gakumas-Translation-Data-EN" />
</a>

# Special Thanks

- [gakuen-imas-localify](https://github.com/chinosk6/gakuen-imas-localify)
- [GakumasTranslationData](https://github.com/chinosk6/GakumasTranslationData)
- [gkmasToolkit](https://github.com/kishidanatsumi/gkmasToolkit)
- [UmaPyogin-Android](https://github.com/akemimadoka/UmaPyogin-Android)
- [UnityResolve.hpp](https://github.com/issuimo/UnityResolve.hpp)
