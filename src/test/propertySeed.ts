const MIN_FAST_CHECK_SEED = -0x80000000;
const MAX_FAST_CHECK_SEED = 0x7fffffff;

export function parseFastCheckSeed(value: string | undefined): number | undefined {
  if (value === undefined || value.trim() === "") return undefined;
  const seed = Number(value);

  if (
    !Number.isInteger(seed) ||
    seed < MIN_FAST_CHECK_SEED ||
    seed > MAX_FAST_CHECK_SEED
  ) {
    throw new Error(
      "FC_SEED must be a base-10 integer between -2147483648 and 2147483647.",
    );
  }

  return seed;
}
