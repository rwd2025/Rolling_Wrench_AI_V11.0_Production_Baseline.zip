Rolling Wrench AI V11.4 — Safe Photo Upload

Fixes iPhone freeze after choosing photo.
Photo import now:
- Opens a safe Invoice Photo Import screen
- Lets user choose a photo
- Compresses it to a small preview
- Saves preview to local state
- Does not run heavy OCR on the main thread
- Lets user paste/speak invoice text to import parts

Test:
1. Tap Add Photo
2. Choose an invoice photo
3. Confirm preview appears and app does not freeze
4. Paste invoice text
5. Import parts
