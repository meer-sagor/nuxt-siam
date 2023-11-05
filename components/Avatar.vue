<script setup lang="ts">

type IProps = {
  src: string;
  alt: string;
  customClass?: string;
  size: 'md' | 'sm' | 'lg' | 'xl';
};

// TypeScript
// withDefaults(defineProps<IProps>(), {
//     src: 'https://avatars.githubusercontent.com/u/739984?v=4'
// })

defineProps<IProps>()




// Normal
// defineProps({
//     src: {
//         type: String,
//         default: 'https://avatars.githubusercontent.com/u/739984?v=4',
//     },
//     alt: String,
//     customClass: String, 
//     size: String
// });

</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="`${customClass}  ${
      size === 'md' && '!w-[7rem] !h-[7rem]'
    } w-[5rem] h-[5rem] rounded-full`"
  />
</template>
