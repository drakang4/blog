import React from 'react';
import useTheme from '../hooks/useTheme';

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  if (!theme) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <button
      className="relative cursor-pointer self-center"
      role="switch"
      aria-label="어두운 모드 사용"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <div className="w-12 h-6 rounded-full bg-gray-900">
        <div className="absolute top-0 left-0.5">🌚</div>
        <div className="absolute top-0 right-0.5">🌝</div>
      </div>
      <div
        className={`w-6 h-6 absolute left-0 top-0 bg-white border border-solid border-gray-900 rounded-full transition-transform transform ${
          isDark ? 'translate-x-full' : undefined
        }`}
      />
    </button>
  );
};

export default Toggle;
