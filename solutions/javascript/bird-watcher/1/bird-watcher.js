// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let soma = 0;
  
  
  for (let i = 0; i < birdsPerDay.length; i++)
  {
    soma = birdsPerDay[i] + soma;
  }
  
  return soma;
  
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let soma = 0;
  const  startIndex = (week - 1) * 7
  
  for (let i = startIndex; i < startIndex + 7; i++)
  {
    soma = birdsPerDay[i] + soma;
  }
  
  return soma;
  
  
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
    let soma = 0;
  
  
  for (let i = 0; i < birdsPerDay.length; i = i + 2)
  {
    birdsPerDay[i] += 1;
  }
  
  return soma;
  
}
