(() => {
  /**
   * A map from unit name to number of seconds, ordered by decreasing value.
   * @type {Map<string, number>}
   */
  const units = new Map();
  units.set("year", 365 * 24 * 60 * 60);
  units.set("month", 30 * 24 * 60 * 60);
  units.set("day", 24 * 60 * 60);
  units.set("hour", 60 * 60);
  units.set("minute", 60);
  units.set("second", 1);

  /**
   * Decides minimum and maximum units for a number of seconds.
   * @return {[string, string]} The names of the minimum and maximum units.
   */
  function getDefaultUnits(/** @type {number} */ seconds) {
    // "Infinity years"
    if (!Number.isFinite(seconds)) {
      return ["year", "year"];
    }

    // Round 12 months to 1 year over the last 5 days of the year
    if (seconds >= 12 * units.get("month")) {
      return ["month", "year"];
    }

    const unitsArray = Array.from(units);

    for (let i = 0; i < unitsArray.length; i++) {
      const [unit, unitSeconds] = unitsArray[i];

      if (seconds >= unitSeconds) {
        const [minUnit] = unitsArray[Math.min(i + 1, unitsArray.length - 1)];
        return [minUnit, unit];
      }
    }
    return ["second", "second"];
  }

  /**
   * Creates a map containing all entries between two boundary keys from another.
   *
   * @template K, V
   * @param {K} firstKey The inclusive first key.
   * @param {K} lastKey The inclusive last key.
   */
  function sliceMap(/** @type {Map<K, V>} */ map, firstKey, lastKey) {
    const array = Array.from(map);

    const firstIndex = array.findIndex(([key, _]) => key === firstKey);
    const lastIndex = array.findIndex(([key, _]) => key === lastKey);

    return new Map(array.slice(firstIndex, lastIndex + 1));
  }

  /**
   * Generates a time string for a number of frames. Zero-count units are ignored.
   *
   * If `minUnit` is omitted, it defaults to `"year"`. \
   * If both `minUnit` and `maxUnit` are omitted, they are decided by a heuristic.
   *
   * @param {string} [minUnit] The name of the smallest unit to include in the output.
   * @param {string} [maxUnit] The name of the largest unit to include in the output.
   */
  function sayTime(/** @type {number} */ frames, minUnit, maxUnit = "year") {
    let seconds = frames / Game.fps;
    if (seconds < 1) {
      return loc("less than 1 second");
    }

    const parts = [];

    if (minUnit === undefined) {
      [minUnit, maxUnit] = getDefaultUnits(seconds);
    }

    for (const [unit, unitSeconds] of sliceMap(units, maxUnit, minUnit)) {
      let unitCount = Math.floor(seconds / unitSeconds);
      seconds -= unitCount * unitSeconds;

      // Round 12 months to 1 year over the last 5 days of the year
      if (unit === "year" && seconds >= 12 * units.get("month")) {
        unitCount++;
        seconds -= 12 * units.get("month");
      }

      if (unitCount !== 0) {
        parts.push(loc("%1 " + unit, LBeautify(unitCount)));
      }
    }
    return parts.join(", ");
  }

  Game.registerMod("time in bank", {
    init: function initTimeInBank() {
      // The element which displays the bank and cps
      const cookies = l("cookies");

      if (cookies === null) {
        Game.Notify("Failed to load Time in Bank", "This version of the mod is not compatible with the current version of Cookie Clicker.", [16,5]);
        return;
      }

      Game.registerHook("draw", function drawTimeInBank() {
        if (!Game.Has("Genius accounting")) {
          return;
        }

        // Adapted from Genius accounting. Originally this formula had an extra second added.
        let cps = Game.cookiesPs * (1 - Game.cpsSucked);
        let timeInBank = (Game.cookies / cps) * Game.fps;

        // Mimic style of "per second" line
        let timeDisplay = document.createElement("div");
        timeDisplay.innerText = loc("%1 worth", sayTime(timeInBank));
        timeDisplay.style.fontSize = "50%";

        // May return another status line if another mod adds one
        let cpsDisplay = cookies.querySelector("div");
        // If "per second" line is missing, inserts after all children
        cookies.insertBefore(timeDisplay, cpsDisplay);
      });
    }
  });
})();
