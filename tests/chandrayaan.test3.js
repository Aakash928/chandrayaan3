const Chandrayaan3 = require("../src/spaceCraft/chandrayaan3");

test("Chandrayaan 3 - Move Forward", () => {
  const chandrayaan = new Chandrayaan3();
  chandrayaan.executeCommands(["f"]);
  expect(chandrayaan.position).toEqual({ x: 0, y: 1, z: 0 });
  expect(chandrayaan.direction).toBe("N");
});

test("Chandrayaan 3 - Move Backward", () => {
  const chandrayaan = new Chandrayaan3();
  chandrayaan.executeCommands(["b"]);
  expect(chandrayaan.position).toEqual({ x: 0, y: -1, z: 0 });
  expect(chandrayaan.direction).toBe("N");
});

test("Chandrayaan 3 - Turn Right", () => {
  const chandrayaan = new Chandrayaan3();
  chandrayaan.executeCommands(["r"]);
  expect(chandrayaan.position).toEqual({ x: 0, y: 0, z: 0 });
  expect(chandrayaan.direction).toBe("E");
});

test("Chandrayaan 3 - Turn Left", () => {
  const chandrayaan = new Chandrayaan3();
  chandrayaan.executeCommands(["l"]);
  expect(chandrayaan.position).toEqual({ x: 0, y: 0, z: 0 });
  expect(chandrayaan.direction).toBe("W");
});

test("Chandrayaan 3 - Turn Up", () => {
  const chandrayaan = new Chandrayaan3();
  chandrayaan.executeCommands(["u"]);
  expect(chandrayaan.position).toEqual({ x: 0, y: 0, z: 0 });
  expect(chandrayaan.direction).toBe("Up");
});

test("Chandrayaan 3 - Turn Down", () => {
  const chandrayaan = new Chandrayaan3();
  chandrayaan.executeCommands(["d"]);
  expect(chandrayaan.position).toEqual({ x: 0, y: 0, z: 0 });
  expect(chandrayaan.direction).toBe("Down");
});

test("Chandrayaan 3 - Complex Commands", () => {
  const chandrayaan = new Chandrayaan3();
  chandrayaan.executeCommands(["f", "r", "u", "b", "l"]);
  expect(chandrayaan.position).toEqual({ x: 0, y: 1, z: -1 });
  expect(chandrayaan.direction).toBe("W");
});
