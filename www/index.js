async function main() {
  try {
    await import("wgpu");
  } catch (e) {
    if (
      `${e}` !=
      "Error: Using exceptions for control flow, don't mind me. This isn't actually an error!"
    ) {
      console.error(e);
    }
  }
}

main().then(() => {
  console.log("Loaded");
});
