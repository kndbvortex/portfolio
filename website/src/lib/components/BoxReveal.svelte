<script>
  import { Motion, useAnimation } from "svelte-motion";

  export let width = "fit-content";
  export let boxColor = "gray-200";
  export let duration = 0.5;
  export let className="";

  //   Animation Controls
  let mainControls = useAnimation();
  let sideControls = useAnimation();

  let viewEnter = () => {
    // console.log("view entered");
    mainControls.start("visible");
    sideControls.start("visible");
  };
  let viewLeave = () => {
    // console.log("view exited");
    mainControls.start("hidden");
    sideControls.start("hidden");
  };
</script>

<div
  class="relative overflow-hidden"
  style="width:{width}"
>
  <Motion
    let:motion
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
  >
    <div use:motion>
      <slot>Default</slot>
    </div>
  </Motion>
  <Motion
    variants={{
      hidden: { left: 0 },
      visible: { left: "100%" },
    }}
    initial="hidden"
    animate={sideControls}
    transition={{ duration: duration ? duration : 0.5, ease: "easeIn" }}
    let:motion
  >
    <div
      class="absolute top-[4px] bottom-[4px] left-0 right-0 z-40 bg-{boxColor} opacity-20 {className}"
      use:motion
    ></div>
  </Motion>
</div>