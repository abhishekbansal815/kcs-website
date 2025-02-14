"use client";

import React, { useState, useEffect, useRef } from "react";

interface TabContent {
  title: string;
  description: string | JSX.Element;
}

interface TabsProps {
  tabs: Record<string, TabContent>;
  onTabChange?: (key: string) => void;
}

const PrimaryTab: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(tabs)[0]);
  const leftTabsContainerRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLDivElement>(null);
  const verticalDividerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    onTabChange?.(key);
  };

  useEffect(() => {
    if (
      !leftTabsContainerRef.current ||
      !contentSectionRef.current ||
      !verticalDividerRef.current
    )
      return;

    const updateDividerHeight = () => {
      // Use scrollHeight to capture the entire content height
      const leftHeight = leftTabsContainerRef.current!.scrollHeight;
      const contentHeight = contentSectionRef.current!.scrollHeight;
      verticalDividerRef.current!.style.height = `${Math.max(
        leftHeight,
        contentHeight
      )}px`;
    };

    updateDividerHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateDividerHeight();
    });

    resizeObserver.observe(leftTabsContainerRef.current);
    resizeObserver.observe(contentSectionRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeTab]);

  return (
    <div className="flex flex-col md:flex-row md:gap-8 bg-white/5 rounded-3xl border-2 border-white/10 p-4 md:p-6 md:py-8 h-auto md:h-[300px] lg:h-[360px] overflow-y-auto hide-scrollbar">
      {/* Left Tabs Container */}
      <div
        ref={leftTabsContainerRef}
        className="grid grid-cols-2 sm:flex flex-col items-center w-full md:w-1/3 gap-4 sm:gap-0 sm:space-y-6 p-4"
      >
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => handleTabClick(key)}
            className={`w-full max-w-xs py-2.5 px-4 rounded-full  transition-colors ${
              activeTab === key
                ? "bg-primary-orange text-white"
                : "bg-transparent text-white border border-white hover:bg-white/10"
            }`}
          >
            <span className="block truncate font-semibold">
              {tabs[key].title}
            </span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div
        ref={verticalDividerRef}
        className="hidden md:block w-px bg-white/20 self-stretch mx-2"
      />

      {/* Horizontal Divider for Mobiles */}
      <div className="w-1/2 block md:hidden h-px bg-white/20 self-stretch mt-3 mx-auto" />

      {/* Content Section */}
      <div ref={contentSectionRef} className="flex-1 p-4 md:px-6">
        <header className="-mx-3 text-primary-orange text-2xl font-semibold mb-6">
          {tabs[activeTab].title}
        </header>
        <article className="mb-6 text-white prose prose-invert max-w-none">
          {tabs[activeTab].description}
        </article>
      </div>
    </div>
  );
};

export default PrimaryTab;
