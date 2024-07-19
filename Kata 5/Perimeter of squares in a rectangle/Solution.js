const getFibonacciSequence = (number) => {
  const sequence = [1];

  for (let i = 0; i < number; i++) {
    if (sequence.length === 1) {
      sequence.push(1);
    } else {
      sequence.push(
        sequence[sequence.length - 1] + sequence[sequence.length - 2]
      );
    }
  }

  return sequence;
};

const perimeter = (number) => {
  const fibonacciSequence = getFibonacciSequence(number);

  const sumFibonacciSequence = fibonacciSequence.reduce(
    (acc, curr) => acc + curr,
    0
  );

  return 4 * sumFibonacciSequence;
};
