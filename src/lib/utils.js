import labelColors from '$lib/label_colors.json';

export function mergeLabelsColors(labels) {
    let obj = {};
    for (let i = 0; i < labels.length; i++) {
        if (labels[i] in labelColors) {
            obj[labels[i]] = labelColors[labels[i]];
        } else {
            obj[labels[i]] = '#312783';
        }
    }
    return obj;
}