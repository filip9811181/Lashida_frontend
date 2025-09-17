'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'EN', name: 'English', flag: '/flags/us.svg' },
  { code: 'ES', name: 'Español', flag: '/flags/es.svg' },
  { code: 'FR', name: 'Français', flag: '/flags/fr.svg' },
  { code: 'DE', name: 'Deutsch', flag: '/flags/de.svg' },
  { code: 'ZH', name: '中文', flag: '/flags/cn.svg' },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export const LanguageSelector = ({ 
  selectedLanguage, 
  onLanguageChange, 
  variant = 'desktop',
  className 
}: LanguageSelectorProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('[data-language-dropdown]')) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange(languageCode);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectedLanguageData = languages.find(lang => lang.code === selectedLanguage);

  if (variant === 'mobile') {
    return (
      <div className={cn('relative w-full max-w-[120px]', className)} data-language-dropdown>
        <button
          onClick={toggleDropdown}
          className='w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200'
        >
          <Image
            src={selectedLanguageData?.flag || '/flags/us.svg'}
            alt={`${selectedLanguageData?.name} flag`}
            width={32}
            height={24}
            className='rounded-sm'
          />
          <svg
            className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </button>

        {/* Mobile Language Dropdown */}
        {isDropdownOpen && (
          <div className='absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50'>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center justify-center gap-2 px-3 py-2 hover:bg-gray-100 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  selectedLanguage === language.code ? 'bg-gray-200' : ''
                }`}
              >
                <Image
                  src={language.flag}
                  alt={`${language.name} flag`}
                  width={32}
                  height={24}
                  className='rounded-sm'
                />
                {selectedLanguage === language.code && (
                  <span className='text-green-600 text-sm'>✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop variant
  return (
    <div className={cn('relative', className)} data-language-dropdown>
      <button
        onClick={toggleDropdown}
        className='flex items-center justify-center gap-1 w-14 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200'
        title={selectedLanguageData?.name}
      >
        <Image
          src={selectedLanguageData?.flag || '/flags/us.svg'}
          alt={`${selectedLanguageData?.name} flag`}
          width={32}
          height={24}
          className='rounded-sm'
        />
        <svg
          className={`w-3 h-3 text-black transition-transform duration-200 ml-1 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {/* Desktop Language Dropdown */}
      {isDropdownOpen && (
        <div className='absolute top-full left-0 mt-2 w-36 bg-white/95 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg z-50'>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className={`w-full flex items-center justify-center gap-1 px-3 py-2 hover:bg-white/20 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                selectedLanguage === language.code ? 'bg-white/30' : ''
              }`}
              title={language.name}
            >
              <Image
                src={language.flag}
                alt={`${language.name} flag`}
                width={32}
                height={24}
                className='rounded-sm'
              />
              <span className='text-sm'>{language.icon}</span>
              {selectedLanguage === language.code && (
                <span className='text-green-600 text-sm'>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
