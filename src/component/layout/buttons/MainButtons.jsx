import { Delete, Download, Edit2, EraserIcon, Plus } from 'lucide-react';
import { useState } from 'react';
import './MainButtons.css';

export default function MainButtons({ type }) {
  const buttonDetails = [
    {
      type: 'downloadButton',
      icon: Download,
      text: 'Download',
      hoverColor: '#17795E',
      activeColor: '#146c54',
      borderColor: '#17795E',
      textColor: 'white',
      backgroundColor: '#209978',
    },
    {
      type: 'deleteButton',
      icon: Delete,
      text: 'Delete',
      hoverColor: '#e74c3c',
      activeColor: '#c0392b',
      borderColor: '#e74c3c',
      textColor: 'white',
      backgroundColor: '#e74c3c',
    },
    // Add more buttons here...
  ];

  const selectedButton = buttonDetails.find((button) => button.type === type);
  const [bgColor, setBgColor] = useState(selectedButton?.backgroundColor || '');
  const [borderColor, setBorderColor] = useState(selectedButton?.borderColor || '');

  if (!selectedButton) return null;

  const Icon = selectedButton.icon;

  return (
    <button
      type="button"
      className="relative w-[150px] h-[40px] flex items-center border overflow-hidden group transition-all duration-300"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderStyle: 'solid',
        color: selectedButton.textColor,
      }}
      onMouseEnter={() => {
        setBgColor(selectedButton.hoverColor);
        setBorderColor(selectedButton.hoverColor);
      }}
      onMouseLeave={() => {
        setBgColor(selectedButton.backgroundColor);
        setBorderColor(selectedButton.borderColor);
      }}
      onMouseDown={() => {
        setBgColor(selectedButton.activeColor);
        setBorderColor(selectedButton.activeColor);
      }}
      onMouseUp={() => {
        setBgColor(selectedButton.hoverColor);
        setBorderColor(selectedButton.hoverColor);
      }}
    >
      <span className="translate-x-[22px] font-semibold transition-all duration-300 group-hover:text-transparent">
        {selectedButton.text}
      </span>

      <span
        className="absolute right-0 h-full w-[39px] flex items-center justify-center transform translate-x-[109px] transition-all duration-300 group-hover:translate-x-0 group-hover:w-[148px]"
        style={{ backgroundColor: borderColor }}
      >
        <Icon className="w-5 h-5 text-white" />
      </span>
    </button>
  );
}
