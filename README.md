# TDD "weak points" remedy, TPP, also has "weak points" 

### Branches
1) tdd-weakpoint-example
2) tpp-weakpoint-example

## Kata goal
Pass a string with a text and have the phrases wrapped in jumplines, prefereably where there is an space.

```
  assertThat(wrap("verylongword", 4), is("very\nlong\nword"));
  assertThat(wrap("word word", 6), is("word\nword"))
 ```