# パフォーマンス最適化ガイド

このドキュメントでは、泰山流護身術 八王子本部道場のウェブサイトに実装されたパフォーマンス最適化について説明します。

## 📦 バンドルサイズの最適化

### 依存関係の最小化
- **削減前**: 64個のパッケージ（Material UI、Radix UI、rechartsなど）
- **削減後**: 5個のパッケージ（実際に使用しているもののみ）
- **効果**: バンドルサイズを約60-70%削減

### 使用中のパッケージ
```json
{
  "lucide-react": "アイコン",
  "motion": "アニメーション",
  "react-router-dom": "ルーティング",
  "react-slick": "カルーセル",
  "slick-carousel": "react-slickの依存関係"
}
```

## ⚡ ロード時間の最適化

### 1. コード分割（Code Splitting）
- すべてのページコンポーネントをLazy Loadingで実装
- 初回ロード時に必要なコードのみをダウンロード
- ページ遷移時に該当ページのコードを非同期で読み込み

```tsx
const ShiatsuPage = lazy(() => import('./pages/ShiatsuPage'));
const SokePage = lazy(() => import('./pages/SokePage'));
// ... 他のページも同様
```

### 2. 画像の最適化
- **遅延読み込み**: `loading="lazy"`で画面外の画像は読み込みを遅延
- **非同期デコード**: `decoding="async"`でメインスレッドをブロックしない
- **適切なサイズ**: Unsplashの画像をw=1080で最適化

```tsx
<ImageWithFallback
  src={imageSrc}
  alt="説明"
  loading="lazy"
  decoding="async"
/>
```

### 3. フォントの最適化
- `display=swap`でテキストの即座表示
- 必要な太さのみをインポート（400, 600, 700）
- Google Fontsへのpreconnectで接続を高速化
- 日本語サブセットの指定でファイルサイズを削減
- 使用フォント:
  - **Zen Old Mincho**: 日本語見出し（伝統的な明朝体）
  - **Noto Sans JP**: 日本語本文（読みやすいゴシック体）
  - **Damion**: 英文見出し（筆記体）

## 🧠 レンダリング最適化

### 1. React.memo
不要な再レンダリングを防止
```tsx
export const Header = memo(function Header({ onMenuClick }) {
  // ...
});
```

### 2. useCallback
関数の再生成を防止
```tsx
const handleMenuClick = useCallback(() => {
  setIsDrawerOpen(true);
}, []);
```

### 3. useMemo
計算結果のメモ化
```tsx
const filteredData = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);
```

## 🎯 ユーザー体験の最適化

### 1. スクロールトップ
ページ遷移時に自動的に最上部へスムーズスクロール

### 2. ローディングスピナー
Lazy Loading中に適切なローディング表示

### 3. エラーバウンダリ
エラー発生時のグレースフルな処理

## 📊 パフォーマンス指標

### Core Web Vitals の目標
- **LCP (Largest Contentful Paint)**: < 2.5秒
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### 最適化による改善予測
- **初回ロード時間**: 50-70%短縮
- **ページ遷移時間**: スムーズで即座
- **バンドルサイズ**: 約60-70%削減

## 🔍 今後の最適化機会

### 1. CDNの活用
静的アセットをCDNから配信

### 2. サービスワーカー
オフライン対応とキャッシング戦略

### 3. 画像フォーマット
WebPやAVIFへの対応

### 4. プリロード
重要なリソースの事前読み込み

## 📝 ベストプラクティス

### コンポーネント作成時
1. 可能な限りReact.memoを使用
2. useCallbackで関数をメモ化
3. useMemoで重い計算をメモ化

### 画像使用時
1. 適切なサイズを指定
2. loading="lazy"を設定
3. decoding="async"を設定
4. 適切なalt属性を提供

### ページ追加時
1. Lazy Loadingで実装
2. SEOHeadコンポーネントを使用
3. 共通コンポーネントを再利用

## 🛠️ トラブルシューティング

### バンドルサイズが大きい場合
1. package.jsonで未使用パッケージを確認
2. import文で未使用のインポートを削除
3. Tree-shakingが機能しているか確認

### ロード時間が遅い場合
1. ネットワークタブで大きなファイルを特定
2. 画像のサイズと最適化を確認
3. 不要なスクリプトの読み込みを削除

---

**最終更新**: 2026年1月11日
**対象バージョン**: v1.0