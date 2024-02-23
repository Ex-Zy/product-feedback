<template>
  <li class="skeleton-list__item">
    <div class="skeleton-list__vote" />
    <div class="skeleton-list__content">
      <h3 class="skeleton-list__title h3" />
      <p class="skeleton-list__description b1" />
      <div class="skeleton-list__category" />
    </div>
    <div class="skeleton-list__comment-amount" />
  </li>
</template>

<style scoped lang="scss">
.skeleton-list {
  &__item {
    border-radius: var(--radius-1);
    min-height: 150px;
    cursor: progress;
    padding: 28px 32px;
    display: flex;
    column-gap: 40px;

    box-shadow: 0 2px 10px -12px rgba(0, 0, 0, 0.44);
    border: 3px solid #f2f4ff;
    animation: pulse-bg 1s infinite;

    @include mobile {
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 24px;
    }
  }

  &__vote {
    width: 40px;
    height: 52px;
    border-radius: var(--radius-1);
    background: #e7eafd;
    cursor: pointer;

    @include mobile {
      order: 2;
      width: 69px;
      height: 32px;
    }
  }

  &__content {
    flex-grow: 1;

    @include mobile {
      order: 1;
      flex-basis: 100%;
      margin-bottom: 16px;
    }
  }

  &__title {
    width: 178px;
    height: 26px;
    background: #e7eafd;
    border-radius: var(--radius-1);

    @include mobile {
      height: 19px;
    }
  }

  &__description {
    margin: 4px 0 12px;
    background: #e8eafd;
    max-width: 492px;
    width: 100%;
    height: 26px;
    border-radius: var(--radius-1);

    @include mobile {
      height: 46px;
      margin: 4px 0 12px;
      max-width: 345px;
      width: 100%;
    }
  }

  &__category {
    background: #e8eafd;
    border-radius: var(--radius-1);
    width: 110px;
    height: 30px;

    @include mobile {
      width: 75px;
    }
  }
}

@keyframes pulse-bg {
  0% {
    background-color: var(--color-4);
  }
  50% {
    background-color: var(--color-5);
  }
  100% {
    background-color: var(--color-4);
  }
}
</style>
