const obj1 = {
  a: 1,
  b: 2,

  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
      console.log(this.b);
      return this
    }
};

obj1.getA().getB()
