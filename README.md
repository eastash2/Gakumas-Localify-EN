[![](https://github.com/NatsumeLS/Gakumas-Localify-EN/actions/workflows/build.yml/badge.svg)](https://github.com/NatsumeLS/Gakumas-Localify-EN/actions/workflows/build.yml)
[![](https://hits.dwyl.com/NatsumeLS/Gakumas-Localify-EN.svg?style=flat-square)](https://github.com/NatsumeLS/Gakumas-Localify-EN/graphs/traffic)

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/qARc4Hdc3n)](https://natsume.io/GakumasLocalize)

<img align="center" src=/Images/logo.png>

A Xposed Module for Localizing *Gakuen iDOLM@STER* to English.

It works by hooking into the game's text rendering system and replacing text during runtime.

This project includes a modified version of [gakuen-imas-localify](https://github.com/chinosk6/gakuen-imas-localify).

It is compatible only with the *Android* version of the game.

<!--
# Previews

<img align="center" src=/Images/preview.png>

<div align="center">

# Video Preview

</div>
-->

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

# Translation Progress

[Detailed Translation Progress](https://docs.google.com/spreadsheets/d/101wE-LjNJL-lSzZB96ifQAj3X-WmmA1ZIXKFTFRFJGY)

[![Link](https://docs.google.com/spreadsheets/d/e/2PACX-1vQctXxwDqkSCNkFs_Ipgh4W0g4Z8dBoyTvJISN16lf7m-huOnfngVtnnNXmRe52oBp0sTtfxapFHN4y/pubchart?oid=847311911&format=image)](https://docs.google.com/spreadsheets/d/101wE-LjNJL-lSzZB96ifQAj3X-WmmA1ZIXKFTFRFJGY/edit?usp=sharing)
[![Link](https://docs.google.com/spreadsheets/d/e/2PACX-1vQctXxwDqkSCNkFs_Ipgh4W0g4Z8dBoyTvJISN16lf7m-huOnfngVtnnNXmRe52oBp0sTtfxapFHN4y/pubchart?oid=574536670&format=image)](https://docs.google.com/spreadsheets/d/101wE-LjNJL-lSzZB96ifQAj3X-WmmA1ZIXKFTFRFJGY/edit?usp=sharing)

# Download

You can download the latest apk build from the GitHub Actions artifacts.

1. Go to the [GitHub Actions](https://github.com/NatsumeLS/Gakumas-Localify-EN/actions/workflows/build.yml) page.
2. Find the most recent workflow run.
3. Click on the workflow run to view details.
4. In the `Artifacts` section at the bottom of the page, download the `GakumasLocalify-Signed-apk` artifact.

# Getting started

- For Root users use [LSPosed](https://github.com/LSPosed/LSPosed).
- For Non-Root users use [LSPatch](https://github.com/LSPosed/LSPatch).

`LSPatch` is an alternative to `LSPosed` and is used for applying patches to your Android system. It does not require root access, which makes it a popular choice for users who do not want to root their devices.

`LSPosed` instructions won't be provided here since it is unique for each devices.

## Instructions for Installing `LSPatch` on a Device Using `Shizuku`

## Step 1: Install Shizuku
   - Install `Shizuku` from [Google Play Store](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api).
   - Open `Shizuku` and follow the instructions to start the service.

## Step 2: Install LSPatch
   - Visit [LSPatch GitHub repository](https://github.com/LSPosed/LSPatch/releases/latest) to download the latest APK.
   - Install `LSPatch` on your device.

## Step 3: Configure LSPatch with Shizuku
   - Open `Shizuku` and ensure the service is running.
   - Open `LSPatch`.
   - You should see a prompt to grant `Shizuku` permissions. Follow the on-screen instructions to grant the necessary permissions.

## Step 4: Use LSPatch
   - Install `Gakumas-Localify-EN`
   - Open `LSPatch` and navigate to the second tab where you can add apps.
   - Add new patch and select `学マス` then follow the instructions to apply patches.

     **Only use Local Patch Mode**

# Localization Data

[Gakumas-Translation-Data-EN](https://github.com/NatsumeLS/Gakumas-Translation-Data-EN)

- Localization files are placed in `/app/src/main/assets/gakumas-local`

# Special Thanks

- [gakuen-imas-localify](https://github.com/chinosk6/gakuen-imas-localify)
- [GakumasTranslationData](https://github.com/chinosk6/GakumasTranslationData)
- [gkmasToolkit](https://github.com/kishidanatsumi/gkmasToolkit)
- [UmaPyogin-Android](https://github.com/akemimadoka/UmaPyogin-Android)
- [UnityResolve.hpp](https://github.com/issuimo/UnityResolve.hpp)
