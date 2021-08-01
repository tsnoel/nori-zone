const HD = {
    sorcerer: 6,
    wizard: 6,
    artificer: 8,
    bard: 8,
    cleric: 8,
    druid: 8,
    monk: 8,
    rouge: 8,
    warlock: 8,
    fighter: 10,
    paladin: 10,
    ranger: 10,
    barbarian: 12
};

const PROFICIENCIES = {
    "changeling": [
        { "type": "language", "source": "racial", "value": "common and two other languages of your choice" },
        { "type": "tool", "source": "racial", "value": "one tool of your choice" }
    ],
    "monk": [
        { "type": "weapon", "source": "class", "value": "simple weapons" },
        { "type": "weapon", "source": "class", "value": "shortswords" },
        { "type": "tool", "source": "class", "value": "any one type of artisan's tools or any one musical instrument of your choice", "primary": true }
    ],
    "warlock": [
        { "type": "armor", "source": "class", "value": "light armor" },
        { "type": "weapon", "source": "class", "value": "simple weapons" }
    ]
};

const SAVE = {
    artificer: ['con', 'int'],
    barbarian: ['str', 'con'],
    bard: ['dex', 'cha'],
    cleric: ['wis', 'cha'],
    druid: ['int', 'wis'],
    fighter: ['str', 'con'],
    monk: ['str', 'dex'],
    paladin: ['wis', 'cha'],
    ranger: ['str', 'dex'],
    rogue: ['dex', 'int'],
    sorcerer: ['con', 'cha'],
    warlock: ['wis', 'cha'],
    wizard: ['int', 'wis']
};

const SKILL = {
    'acrobatics': {ability: 'dex'},
    'animal handling': {ability: 'wis'},
    'arcana': {ability: 'int'},
    'athletics': {ability: 'str'},
    'deception': {ability: 'cha'},
    'history': {ability: 'int'},
    'insight': {ability: 'wis'},
    'intimidation': {ability: 'cha'},
    'investigation': {ability: 'int'},
    'medicine': {ability: 'wis'},
    'nature': {ability: 'int'},
    'perception': {ability: 'wis'},
    'performance': {ability: 'cha'},
    'persuasion': {ability: 'cha'},
    'religion': {ability: 'int'},
    'sleight of hand': {ability: 'dex'},
    'stealth': {ability: 'dex'},
    'survival': {ability: 'wis'}
};

const SPEED = {
    changeling: { land: 30 },
    default: { land: 30 }
};

exports.generate = (data) => {
    const abilityMod = this.getAbilityMod(data.ability);
    const proficiency = this.getProficiency(data.level);

    return {
        ability: data.ability,
        abilityMod,
        ac: this.getAC(abilityMod, data.level),
        hd: this.getHD(data.level),
        hp: this.getMaxHP(data.level, abilityMod),
        initiative: abilityMod.dex,
        level: data.level,
        proficiencies: this.getProficiencies(data.level,
            data.racial, data.proficiencies),
        proficiency,
        save: this.getSave(data.level, abilityMod, proficiency),
        skill: this.getSkill(data.skill, abilityMod, proficiency),
        speed: this.getSpeed(data.racial, data.level)
    };
};

exports.getAbilityMod = (ability) => {
    let res = {};

    Object.keys(ability).forEach((a) => {
        res[a] = Math.floor((ability[a] - 10) / 2);
    });

    return res;
}

exports.getAC = (abilityMod, level) => {
    const isUnarmoredDefense = Object.keys(level).find((l) => l === 'monk');

    return 10 + abilityMod.dex + (isUnarmoredDefense ? abilityMod.wis : 0);
}

exports.getHD = (level) => {
    let hit = {};
    let res = '';

    Object.keys(level).forEach((l) => {
        hit[HD[l]] = hit[HD[l]] ?
            hit[HD[l]] + level[l].level : level[l].level;
    });

    Object.keys(hit).forEach((h) => {
        res += `${hit[h]}d${h} `;
    });

    return res.trim();
}

exports.getMaxHP = (level, abilityMod) => {
    let primary = Object.values(level).findIndex((v) => v.primary);
    primary = primary === -1 ? 0 : primary;

    let total = HD[Object.keys(level)[primary]] + abilityMod.con;

    Object.keys(level).forEach((l, index) => {
        total += ((HD[l] / 2) + 1 + abilityMod.con) *
            (index === primary ? level[l].level - 1 :level[l].level);
    });

    return total;
}

exports.getProficiencies = (level, racial, proficiencies) => {
    let res = [...proficiencies];

    let primary = Object.values(level).findIndex((v) => v.primary);
    primary = Object.keys(level)[primary === -1 ? 0 : primary];

    let classRes = [];
    Object.keys(level).forEach((l) => {
        if (PROFICIENCIES[l]) {
            PROFICIENCIES[l].forEach((p) => {
                if (!p.primary || (p.primary && primary === l)) {
                    if (!res.find((r) =>
                        r.type === p.type &&
                        r.source === p.source) &&
                        !classRes.find((r) =>
                        r.value === p.value)) {
                        classRes.push(p);
                    }
                }
            });
        }
    });
    res = res.concat(classRes);

    let racialRes = [];
    PROFICIENCIES[Object.keys(racial)[0]].forEach((p) => {
        if (!res.find((r) => r.type === p.type && r.source === p.source)) {
            racialRes.push(p);
        }
    });
    res = res.concat(racialRes);

    return res;
}

exports.getProficiency = (level) => {
    let total = 0;

    Object.values(level).forEach((l) => {
        total += l.level;
    });

    return Math.ceil(total / 4) + 1;
}

exports.getSave = (level, abilityMod, proficiency) => {
    let res = {};
    let primary = Object.values(level).findIndex((v) => v.primary);
    primary = primary === -1 ? 0 : primary;
    const save = SAVE[Object.keys(level)[primary]];


    Object.keys(abilityMod).forEach((a) => {
        res[a] = {
            proficiency: !!save.find((s) => s === a),
            value: (save.find((s) => s === a) ? proficiency : 0) + abilityMod[a]
        };
    });

    return res;
}

exports.getSkill = (skill, abilityMod, proficiency) => {
    let res = Object.assign({}, SKILL);

    Object.keys(res).forEach((r) => {
        res[r].proficiency = skill.includes(r);
        res[r].value =
            abilityMod[res[r].ability] +
            (res[r].proficiency ? proficiency : 0);
    });

    return res;
}

exports.getSpeed = (racial, level) => {
    const base = SPEED[Object.keys(racial)[0]] || SPEED.default;

    const monkLevels =
        Object.keys(level).find((l) => l === 'monk') ?
            level.monk.level : 0;
    const unarmoredMovement = monkLevels > 1 ?
        (Math.ceil((monkLevels - 1) / 4) + 1) * 5 : 0;

    let res = {};

    Object.keys(base).forEach((b) => {
        res[b] = base[b] + unarmoredMovement;
    });

    return res;
}
