import React, { useEffect, useState } from 'react';

const Toggle = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [checked]);

  return (
    <button
      className="relative cursor-pointer self-center"
      role="switch"
      aria-label="어두운 모드 사용"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
    >
      <div className="w-12 h-6 rounded-full bg-gray-900">
        <div className="absolute top-0 left-0.5">🌚</div>
        <div className="absolute top-0 right-0.5">🌝</div>
      </div>
      <div
        className={`w-6 h-6 absolute left-0 top-0 bg-white border border-solid border-gray-900 rounded-full transition-transform transform ${
          checked ? 'translate-x-full' : undefined
        }`}
      />
    </button>
  );
};

export default Toggle;
