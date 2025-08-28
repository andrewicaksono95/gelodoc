function formatLevel(level) {
    const lvl = Number(level)
    if (lvl === 1) return 'Ringan';
    if (lvl === 2) return 'Sedang';
    if (lvl === 3) return 'Berat';
    return 'N/A'
}

module.exports = {formatLevel}