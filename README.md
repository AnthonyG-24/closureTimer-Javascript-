## closureTimer-Javascript-
Fibonacci Benchmark compares recursive and iterative methods for calculating Fibonacci numbers. It features two functions: fibonacci2n (recursive) and fibonaccin (iterative). It includes a MyTimer utility to measure execution time for each method. Run via command-line arguments to see performance differences.

## Overview

This project benchmarks two methods of calculating Fibonacci numbers: recursive and iterative. It measures and compares their performance using execution time.

## Features

- **Recursive Method**: `fibonacci2n(n)` – An exponential-time approach (O(2^n)).
- **Iterative Method**: `fibonaccin(n)` – A linear-time approach (O(n)).
- **Timer Utility**: `MyTimer` – Measures execution time to compare methods.

## Usage

Run the project with Node.js and specify the method and input number:

```bash
node fibonacci.js --recursive <number>
node fibonacci.js --iterative <number>

Use --help or h for usage instructions:
node fibonacci.js --help

To benchmark the recursive Fibonacci method for n=10:
node fibonacci.js --recursive 10

To benchmark the iterative Fibonacci method for n=10:
node fibonacci.js --iterative 10
