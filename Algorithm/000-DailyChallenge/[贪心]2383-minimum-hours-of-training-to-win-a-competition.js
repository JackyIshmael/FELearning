/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
    // 从起始点，达到终点，需要消耗多少步数
    // 贪心算法，思路是啥。

    // 计算所有energy和所有experience的和，并与initialEnergy做差值（由于每一步阶段都不同，需要在迭代中进行）

    let tempEnergy = 0;
    let tempExp = 0;
    let n = energy.length;
    for (let i = 0; i < n; i++) {
        if (energy[i] >= initialEnergy) {
            const cost1 = energy[i] - initialEnergy + 1; // 必须严格超过，所以额外+1
            initialEnergy += cost1;
            tempEnergy += cost1;
        }
        initialEnergy -= energy[i]

        if (experience[i] >= initialExperience) {
            const cost2 = experience[i] - initialExperience + 1;
            initialExperience += cost2;
            tempExp += cost2;
        }
        initialExperience += experience[i]
    }
    return tempExp + tempEnergy
};