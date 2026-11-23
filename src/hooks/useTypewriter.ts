import { useState, useEffect } from 'react';

interface TypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseDuration = 2200,
}: TypewriterOptions) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCurrentText(phrases[currentPhraseIndex]);
      return;
    }

    const currentFullPhrase = phrases[currentPhraseIndex];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < currentFullPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(currentFullPhrase.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing full phrase, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentFullPhrase.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, transition to next phrase in sequence
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return {
    text: currentText,
    phraseIndex: currentPhraseIndex,
    isDeleting,
  };
}
