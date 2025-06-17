import React from 'react';

interface AccentedTextProps {
  text: string;
  baseWeight?: number;
  accentWeight?: number;
  className?: string;
}

export default function AccentedText({ 
  text, 
  baseWeight = 300, 
  accentWeight = 500,
  className = ""
}: AccentedTextProps) {
  // Regex per identificare le lettere accentate
  const accentedRegex = /[àèéìòùÀÈÉÌÒÙ]/g;
  
  // Dividi il testo in parti (lettere accentate e non)
  const parts = [];
  let lastIndex = 0;
  
  // Trova tutte le corrispondenze di lettere accentate
  let match;
  while ((match = accentedRegex.exec(text)) !== null) {
    // Aggiungi il testo prima della lettera accentata
    if (match.index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.index),
        accented: false
      });
    }
    
    // Aggiungi la lettera accentata
    parts.push({
      text: match[0],
      accented: true
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Aggiungi il resto del testo dopo l'ultima lettera accentata
  if (lastIndex < text.length) {
    parts.push({
      text: text.substring(lastIndex),
      accented: false
    });
  }
  
  return (
    <span className={className} style={{ fontWeight: baseWeight }}>
      {parts.map((part, index) => (
        <span 
          key={index}
          data-accent-weight={part.accented}
          style={part.accented ? { fontWeight: accentWeight } : undefined}
        >
          {part.text}
        </span>
      ))}
    </span>
  );
}