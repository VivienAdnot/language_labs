// 00-as-const-tuples/exos.ts

// 🎯 Objectif : comprendre as const et typeof T[number]

const COLORS = ['red', 'green', 'blue'] as const;

// 🔍 COLORS est un tuple immuable : readonly ['red', 'green', 'blue']
type Color = typeof COLORS[number]; // 'red' | 'green' | 'blue'

// ✅ Exemple d'utilisation
function isColor(value: string): value is Color {
  return COLORS.includes(value as Color);
}

// 🧪 Test
const testValue = 'green';
if (isColor(testValue)) {
  console.log(`${testValue} est valide`);
} else {
  console.log(`${testValue} est invalide`);
}
