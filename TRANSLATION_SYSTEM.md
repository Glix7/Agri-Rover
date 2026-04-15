# Multilingual Translation System Documentation

## Overview
The AgriRover website features a comprehensive multilingual translation system that supports 6 languages: English, Hindi, Marathi, Tamil, Telugu, and Punjabi. The system is designed to be scalable, maintainable, and user-friendly with language persistence across page navigation.

## Architecture

### Core Components

#### 1. Translation Data Structure (`js/lang.js`)
- **`translations` object**: Centralized translation dictionary containing all text strings
- **`languageNames` object**: Display names for each language
- **Language codes**: `en`, `hi`, `mr`, `ta`, `te`, `pa`

#### 2. Translation Functions
- **`getCurrentLanguage()`**: Retrieves language from localStorage, defaults to 'en'
- **`setLanguage(lang)`**: Sets language in localStorage and updates UI
- **`changeLanguage(lang)`**: Public function for language switching
- **`updateTexts()`**: Updates all text elements with current language translations
- **`syncLangToggleLabel()`**: Updates language dropdown button label
- **`htmlLangFromCode(lang)`**: Maps language codes to HTML lang attributes

#### 3. HTML Integration
- **`data-key` attributes**: On elements containing translatable text
- **`data-placeholder` attributes**: On input elements for placeholder translations
- **Language dropdown**: Interactive UI component for language selection
- **Automatic initialization**: Runs on DOMContentLoaded

## Supported Languages

| Code | Language | Native Name | HTML Lang |
|-------|-----------|---------------|------------|
| en    | English   | English       | en         |
| hi    | Hindi     | हिन्दी        | hi         |
| mr    | Marathi   | मराठी        | mr         |
| ta    | Tamil     | தமிழ்        | ta         |
| te    | Telugu    | తెలుగు        | te         |
| pa    | Punjabi   | ਪੰਜਾਬੀ        | pa-Guru    |

## Implementation Details

### Translation Keys
All translatable text uses `data-key` attributes:
```html
<h1 data-key="productHeroTitle">AgriRover – Smart Mini Farming Robot</h1>
<p data-key="productHeroSub">A compact electric robotic system...</p>
```

### Placeholder Translations
Form inputs use `data-placeholder` attributes:
```html
<input type="text" data-placeholder="placeholderName" placeholder="Your Name">
<textarea data-placeholder="placeholderMessage" placeholder="Your Message"></textarea>
```

### Language Switching
Language switching is handled through:
```javascript
function changeLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = htmlLangFromCode(lang);
  updateTexts();
  syncLangToggleLabel();
  closeLangDropdown();
}
```

### Fallback System
- Missing translations fall back to English automatically
- Graceful handling of undefined keys
- No broken UI when translations are missing

## File Structure

### Core Files
- **`js/lang.js`**: Main translation system (829 lines)
- **HTML files**: All pages include translation keys and lang.js script
- **`css/style.css`**: Contains language dropdown styling

### Translation Coverage
All major website sections are translated:
- Navigation menu items
- Hero sections and CTAs
- Product features and descriptions
- Contact form labels and placeholders
- Team information and values
- Footer content and links
- Error pages (404)
- Blog and investor content

## Key Features

### 1. Language Persistence
- Selected language saved in localStorage
- Persists across page refreshes and navigation
- Automatic language detection on page load

### 2. Accessibility
- ARIA attributes on language dropdown
- Keyboard navigation support (Escape to close)
- Screen reader friendly
- Semantic HTML structure

### 3. Performance
- Efficient DOM updates only when language changes
- Minimal JavaScript overhead
- No page reloads required

### 4. Scalability
- Easy to add new languages
- Modular translation structure
- Centralized translation management

## Usage Instructions

### Adding New Translation Keys
1. Add key to all language objects in `translations`
2. Use `data-key` attribute in HTML
3. Text will automatically update on language change

### Adding New Languages
1. Add language code to `languageNames` object
2. Create translation object with all keys
3. Add language button to HTML dropdowns
4. Update `htmlLangFromCode()` function if needed

### Testing
Use the test files:
- `test-language.html`: Basic functionality test
- `test-complete.html`: Comprehensive system test

## Browser Compatibility
- Modern browsers (ES6+)
- localStorage support required
- Works offline (translations loaded from script)

## Maintenance

### Regular Updates
- Review translation completeness
- Update missing keys
- Test language switching
- Validate fallback behavior

### Quality Assurance
- Check for translation consistency
- Verify proper grammar and spelling
- Test all language combinations
- Ensure responsive design works with all languages

## Technical Notes

### Character Encoding
- UTF-8 encoding for all files
- Proper display of Indic scripts
- Font support for all languages

### SEO Considerations
- HTML lang attribute updates automatically
- Search engine friendly
- Proper meta tags for multilingual SEO

### Performance Optimization
- Single translation file load
- Efficient DOM querying
- Minimal reflows and repaints

## Troubleshooting

### Common Issues
1. **Missing translations**: Check if key exists in all language objects
2. **Language not persisting**: Verify localStorage is enabled
3. **Text not updating**: Ensure `data-key` attributes are correct
4. **Dropdown not working**: Check CSS and JavaScript initialization

### Debug Tools
- Browser console for JavaScript errors
- localStorage inspector for language storage
- Network tab for file loading issues

## Future Enhancements

### Planned Features
- RTL language support
- Language auto-detection from browser
- Translation loading optimization
- Advanced accessibility features

### Scalability
- Support for additional regional languages
- Dynamic translation loading
- Translation management interface

---

**Last Updated**: April 14, 2026
**Version**: 1.0
**Maintainer**: AI AgriRover Team
