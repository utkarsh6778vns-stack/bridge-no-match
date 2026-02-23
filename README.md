# Bridge - Awaiting Their Response

This is a pixel-perfect React Native (Expo) implementation of the "Awaiting Their Response" match screen for the Bridge application. This variant features dual status banners and updated iconography.

## 📱 Preview

![Matched Screen](./design_screenshot.png)

## 🚀 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Icons**: Custom SVG icons (Vuesax/Lovely inspired overlapping hearts)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## ✨ Features

- **"Awaiting Their Response" State**: Specialized UI for when the user is waiting for a match's vote.
- **Dual Status Banners**: 
  - 🟢 "You votes yes" banner.
  - 🟠 "You votes yes - Expires 12 hours" banner.
- **Refined Iconography**: Custom overlapping teal hearts for the "Matched by" section.
- **Premium Aesthetics**: Glassmorphism effects and sharp typography.
- **Responsive Layout**: Handling of mobile status bars and navigation items.

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run start
   ```

3. **Open the project**:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## 📂 Project Structure

- `src/components/matches/MatchCard.tsx`: Handles both "Awaiting Your Response" and "Awaiting Their Response" UI variants.
- `src/screens/MatchesScreen.tsx`: Manages the screen layout and mock match data.
- `src/components/Icons/Icons.tsx`: Custom SVG components including the new `HeartsIcon` and `QuestionIcon`.

---
Created with ❤️ by Antigravity
