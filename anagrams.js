function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    for (let i = 0; i < str1.length; i++) {
        charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
        charCount[str2[i]] = (charCount[str2[i]] || 0) - 1;
    }

    for (const char in charCount) {
        if (charCount[char] !== 0) {
            return false;
        }
    }

    return true;
}

function groupAnagrams(words) {
    const anagramGroups = [];
    const visited = new Array(words.length).fill(false);

    for (let i = 0; i < words.length; i++) {
        if (!visited[i]) {
            const group = [words[i]];
            visited[i] = true;

            for (let j = i + 1; j < words.length; j++) {
                if (!visited[j] && isAnagram(words[i], words[j])) {
                    group.push(words[j]);
                    visited[j] = true;
                }
            }

            anagramGroups.push(group);
        }
    }

    return anagramGroups;
}

const inputArray = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = groupAnagrams(inputArray);
console.log(result);
