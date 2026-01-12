# 🎨 カラーシステム - 泰山流護身術サイト

## 概要

このサイトでは、カラー設定を一箇所で管理できるよう、CSSカスタムプロパティとJavaScript定数を組み合わせた二層構造のカラーシステムを採用しています。

## カラーパレット

### メインカラー
- **メインカラー（濃いエンジ色）**: `#6B1F23` 
  - 使用箇所: ヘッダー、セクション背景、見出しテキスト
- **メインカラー（明るいエンジ色）**: `#8C272E`
  - 使用箇所: アクセント、アンダーライン、ハイライト

### サブカラー  
- **セカンダリカラー（ネイビーブルー）**: `#1A2B48`
  - 使用箇所: テキスト、暗めの背景（必要に応じて）
- **ウォームベージュ**: `#E8E2D6`
  - 使用箇所: セクション背景
- **オフホワイト**: `#F9F9F7`
  - 使用箇所: 背景、カード

### ボタン
- **ボタン用の空色**: `#5DADE2`
  - 使用箇所: CTAボタン、アクションボタン
- **ボタンホバー時**: `#85C1E9`
  - 使用箇所: ボタンのホバー状態

### ユーティリティ
- **白**: `#FFFFFF`
- **黒**: `#000000`

## 色の変更方法

### 方法1: CSSカスタムプロパティを編集（推奨）

`/src/styles/theme.css`ファイルの`:root`セクションで色を変更します。

```css
:root {
  /* Taizan-Ryu Color Palette */
  --color-main: #6B1F23; /* メインカラーを変更 */
  --color-main-light: #8C272E; /* アクセントカラーを変更 */
  --color-secondary: #1A2B48;
  --color-warm-beige: #E8E2D6;
  --color-off-white: #F9F9F7;
  --color-button-primary: #5DADE2; /* ボタンの色を変更 */
  --color-button-primary-hover: #85C1E9;
  --color-white: #FFFFFF;
  --color-black: #000000;
}
```

この方法で変更すると、サイト全体に自動的に反映されます。

## コンポーネントでの使用方法

### JavaScript/TSXファイルでの使用

`COLORS`定数をインポートして使用します：

```tsx
import { COLORS, FONTS } from '../constants/theme';

function MyComponent() {
  return (
    <div style={{ backgroundColor: COLORS.main }}>
      <h1 style={{ color: COLORS.white, fontFamily: FONTS.serif }}>
        タイトル
      </h1>
      <button style={{ backgroundColor: COLORS.buttonPrimary }}>
        クリック
      </button>
    </div>
  );
}
```

### 利用可能な色定数

```typescript
COLORS.main              // メインカラー（濃いエンジ色）
COLORS.mainLight         // メインカラー（明るいエンジ色）
COLORS.secondary         // セカンダリカラー（ネイビーブルー）
COLORS.warmBeige         // ウォームベージュ
COLORS.offWhite          // オフホワイト
COLORS.buttonPrimary     // ボタン用の空色
COLORS.buttonPrimaryHover // ボタンホバー時
COLORS.white             // 白
COLORS.black             // 黒
```

## よくある質問

### Q: ハードコードされた色を見つけてしまった場合は？

A: 以下の手順で修正してください：

1. `#6B1F23` → `COLORS.main`
2. `#8C272E` → `COLORS.mainLight`
3. `#5DADE2` → `COLORS.buttonPrimary`
4. `#85C1E9` → `COLORS.buttonPrimaryHover`

### Q: 新しい色を追加したい場合は？

A: 以下の2箇所を更新してください：

1. `/src/styles/theme.css` - CSS変数を追加
2. `/src/app/constants/theme.ts` - TypeScript定数を追加

例：
```css
/* theme.css */
:root {
  --color-new-accent: #FF5733;
}
```

```typescript
// theme.ts
export const COLORS = {
  // ...existing colors
  newAccent: 'var(--color-new-accent)',
}
```

## ファイル構成

```
/src/styles/theme.css          # CSSカスタムプロパティの定義
/src/app/constants/theme.ts    # JavaScript定数の定義
/COLOR_SYSTEM.md               # このドキュメント
```

## 注意事項

- **直接色コードを書かない**: 必ず`COLORS`定数を使用してください
- **一貫性を保つ**: 同じ用途には同じ色定数を使用してください
- **アクセシビリティ**: 色を変更する際はコントラスト比を確認してください

---

最終更新日: 2026年1月11日
