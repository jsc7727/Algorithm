function power(base, exponent) {
    if (exponent === 1) return base;
    const temp = power(base, Math.floor(exponent / 2));
    const result = (temp * temp) % 94906249;
    if (exponent % 2 === 0) return result;
    else return result * base % 94906249;
}
