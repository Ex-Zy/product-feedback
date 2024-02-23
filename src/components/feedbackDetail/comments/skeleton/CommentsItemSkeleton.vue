<template>
  <div class="comment-outer">
    <div class="comment">
      <div class="comment__header">
        <div class="user" />
        <span class="reply-btn" />
      </div>
      <div class="comment__body">
        <div class="comment__content b2" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-outer {
  --avatar-size: 40px;
  --gap: 32px;
  --offset: 6px;

  margin-top: var(--gap);
  position: relative;

  height: 78px;

  @include mobile {
    --gap: 16px;
  }
}

.comment {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__body {
    margin-top: calc(var(--gap) * 0.5);
    padding-left: calc(var(--avatar-size) + var(--gap));
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--gap) * 0.75);

    @include mobile {
      padding: 0;
    }
  }

  &__content {
    height: 22px;
    border-radius: var(--radius-1);
    background: #e7eafd;
    @include mobile {
      height: 19px;
    }
  }
}

.user {
  width: 172px;
  height: 40px;
  border-radius: var(--radius-1);
  background: #e7eafd;

  @include mobile {
    width: 155px;
  }
}

.reply-btn {
  width: 32px;
  height: 16px;
  border-radius: var(--radius-1);
  background: #e7eafd;
}
</style>
