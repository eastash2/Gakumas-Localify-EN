A Xposed Module for Localizing *Gakuen iDOLM@STER* to Korean.
Original work [Gakumas-Localify-EN](https://github.com/NatsumeLS/Gakumas-Localify-EN)

It works by hooking into the game's text rendering system and replacing text during runtime.

[Gakumas-Localify-EN](https://github.com/NatsumeLS/Gakumas-Localify-EN) includes a modified version of [gakuen-imas-localify](https://github.com/chinosk6/gakuen-imas-localify)

It is compatible only with the *Android* version of the game.

Descriptions below is written by [Gakumas-Localify-EN](https://github.com/NatsumeLS/Gakumas-Localify-EN)
Modification:
- **KR, JP, EN font support**
- detach translation data submodule


# Features

Translations
- UI
- Produce Mode
- Idol & Support cards
- Idol Bond Commus
- Main Story
- Event Commus
- Lyrics

# Disclaimer
*Gakumas-Localify-EN* is an independent fan-community project and is not affiliated with *Bandai Namco*.

Assets are modified solely for translation purposes, and **the maintainers believe this is harmless and unlikely to cause any issues.**

However, these modifications do violate the relevant Terms of Service, so **proceed at your own risk.**

**Neither the maintainers nor the contributors will be responsible for any issues that may arise from using this project.**

# Preview

<img src=/docs/preview.png>

</div>

<!--

<div align="center">

# Video Preview

</div>
-->

# Getting started

- For Root users use [LSPosed](https://github.com/LSPosed/LSPosed)
- For Non-Root users use [LSPatch](https://github.com/LSPosed/LSPatch)

`LSPatch` is an alternative to `LSPosed` and is used for applying patches to your Android system. It does not require root access, which makes it a popular choice for users who do not want to root their devices.

Instructions for `LSPosed` won't be provided here since it is unique for each devices.

# Instructions for Installing `LSPatch` using `Shizuku`

## Step 1: Install Shizuku
   - Install `Shizuku` from [Google Play Store](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api).
   - Open `Shizuku` and follow the instructions to start the service.

## Step 2: Install LSPatch
   - Visit [LSPatch GitHub repository](https://github.com/LSPosed/LSPatch/releases/latest) to download the latest APK.
   - Install `LSPatch` on your device.

## Step 3: Configure LSPatch with Shizuku
   - Open `Shizuku` and ensure the service is running.
   - Open `LSPatch`
   - You should see a prompt to grant `Shizuku` permissions.
   - Follow the on-screen instructions to grant the necessary permissions.

## Step 4: Use LSPatch
   - Install `Gakumas-Localify-EN`
   - Open `LSPatch` and navigate to the second tab where you can add apps.
   - Add new patch and select `学マス` then follow the instructions to apply patches.

     **Only use** `Local Patch Mode`

     **Make sure the Module is enabled in** `LSPatch`


# Localization Data

[Gakumas-Translation-Data-EN](https://github.com/NatsumeLS/Gakumas-Translation-Data-EN)

- Localization files are placed in `/app/src/main/assets/gakumas-local`

# Special Thanks

- [gakuen-imas-localify](https://github.com/chinosk6/gakuen-imas-localify)
- [GakumasTranslationData](https://github.com/chinosk6/GakumasTranslationData)
- [gkmasToolkit](https://github.com/kishidanatsumi/gkmasToolkit)
- [UmaPyogin-Android](https://github.com/akemimadoka/UmaPyogin-Android)
- [UnityResolve.hpp](https://github.com/issuimo/UnityResolve.hpp)
