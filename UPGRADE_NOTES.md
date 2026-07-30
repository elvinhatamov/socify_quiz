# Upgrade notes

- App.tsx now references the logo via the raw.githubusercontent URL: https://raw.githubusercontent.com/elvinhatamov/socify_quiz/main/Group.png
- Recommended: move Group.png into /public or import from src/assets for production use to avoid relying on raw.githubusercontent during runtime.
