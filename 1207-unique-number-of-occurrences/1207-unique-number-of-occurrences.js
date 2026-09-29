/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const occurrences = new Map();

    for (const num of arr) {
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
    }

    const counts = Array.from(occurrences.values());

    const uniqueCounts = new Set(counts);

    return counts.length === uniqueCounts.size;
};