<script setup lang="ts">
import type { IUser } from '@/types'
import { computed } from 'vue'

interface Props {
  user: IUser
}

const props = defineProps<Props>()

const imageSrc = computed(() => getImageUrl(props.user.image))

function getImageUrl(name: string) {
  return new URL(`../../../assets/user-images/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="user">
    <div class="user__avatar">
      <img :src="imageSrc" alt="avatar picture" />
    </div>
    <div class="user__content">
      <div class="user__name">{{ props.user.name }}</div>
      <div class="user__username">{{ props.user.username }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  column-gap: var(--gap);
  align-items: center;

  &__avatar {
    width: var(--avatar-size);
    height: var(--avatar-size);
    position: relative;
    border-radius: 50%;
    overflow: hidden;

    img {
      position: absolute;
      inset: 0;
    }
  }

  &__name {
    color: var(--color-7);
    font:
      700 14px/1.4 'Jost',
      sans-serif;
    letter-spacing: -0.194px;
  }

  &__username {
    color: var(--color-8);
    font:
      400 14px/1.4 'Jost',
      sans-serif;
  }
}
</style>
