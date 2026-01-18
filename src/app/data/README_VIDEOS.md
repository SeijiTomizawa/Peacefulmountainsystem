# ビデオ設定ガイド

このファイルでは、Cloudflare Streamに格納された動画の設定方法を説明します。

## 🎥 Cloudflare Streamの設定手順

### 1. Cloudflare Streamにビデオをアップロード

1. Cloudflareダッシュボードにログイン
2. 「Stream」タブに移動
3. 「Upload Video」をクリックしてビデオファイルをアップロード
4. アップロード完了後、各ビデオの詳細ページを開く

### 2. Customer Codeを取得

ビデオのプレイヤーURLから**Customer Code**を取得します：

```
https://customer-abc123def456.cloudflarestream.com/...
                ^^^^^^^^^^^^^^^^
                これがCustomer Code
```

`videosData.ts`の`CLOUDFLARE_STREAM_CONFIG.customerCode`に設定：

```typescript
export const CLOUDFLARE_STREAM_CONFIG = {
  customerCode: 'abc123def456', // ← ここに貼り付け
  baseUrl: 'https://customer-{customerCode}.cloudflarestream.com',
};
```

### 3. Video IDを取得

各ビデオのVideo IDを取得します：

```
https://customer-abc123def456.cloudflarestream.com/1a2b3c4d5e6f7g8h9i0j
                                                    ^^^^^^^^^^^^^^^^^^^^
                                                    これがVideo ID
```

### 4. videosData配列に追加

`videosData.ts`の`videosData`配列を編集：

```typescript
export const videosData: VideoData[] = [
  {
    id: 1,
    titleJP: '基本技術の解説',
    titleEN: 'Basic Technique Explanation',
    descriptionJP: '泰山流の基本的な技術と身体の使い方を宗家が解説します',
    descriptionEN: 'Soke explains basic Taizan-Ryu techniques and body usage',
    cloudflareVideoId: '1a2b3c4d5e6f7g8h9i0j', // ← Video IDを貼り付け
    thumbnailTime: 0,
  },
  // 追加のビデオ...
];
```

## ✅ 設定例

### 完全な設定例

```typescript
// videosData.ts

export const CLOUDFLARE_STREAM_CONFIG = {
  customerCode: 'xyz789abc123',
  baseUrl: 'https://customer-{customerCode}.cloudflarestream.com',
};

export const videosData: VideoData[] = [
  {
    id: 1,
    titleJP: '基本技術の解説',
    titleEN: 'Basic Technique Explanation',
    descriptionJP: '泰山流の基本的な技術と身体の使い方を宗家が解説します',
    descriptionEN: 'Soke explains basic Taizan-Ryu techniques and body usage',
    cloudflareVideoId: '1a2b3c4d5e6f7g8h9i0j',
    thumbnailTime: 0,
  },
  {
    id: 2,
    titleJP: '実戦応用技術',
    titleEN: 'Practical Application Techniques',
    descriptionJP: '実際の状況での応用技術と360度防御の実演',
    descriptionEN: 'Demonstration of practical applications and 360-degree defense',
    cloudflareVideoId: '2b3c4d5e6f7g8h9i0j1k',
    thumbnailTime: 5, // 5秒の位置のサムネイルを使用
  },
];
```

## 📝 パラメータの説明

### VideoData型

| パラメータ | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| `id` | number | ✅ | ユニークな識別子（1, 2, 3...） |
| `titleJP` | string | ✅ | 日本語のタイトル |
| `titleEN` | string | ✅ | 英語のタイトル |
| `descriptionJP` | string | ✅ | 日本語の説明 |
| `descriptionEN` | string | ✅ | 英語の説明 |
| `cloudflareVideoId` | string | ✅ | Cloudflare StreamのVideo ID |
| `thumbnailTime` | number | ❌ | サムネイル表示時間（秒）、省略時は0 |

## 🔧 新しいビデオを追加する方法

1. Cloudflare Streamにビデオをアップロード
2. Video IDをコピー
3. `videosData.ts`を開く
4. `videosData`配列に新しいオブジェクトを追加：

```typescript
{
  id: 7, // 次の番号
  titleJP: '新しいビデオのタイトル',
  titleEN: 'New Video Title',
  descriptionJP: '日本語の説明',
  descriptionEN: 'English description',
  cloudflareVideoId: 'YOUR_VIDEO_ID_HERE',
  thumbnailTime: 0,
},
```

5. ファイルを保存
6. ブラウザでページを更新して確認

## 🎬 サムネイルについて

`thumbnailTime`パラメータで、ビデオのどの時点をサムネイルとして使用するかを指定できます（秒単位）。

```typescript
thumbnailTime: 0,  // ビデオの開始時点
thumbnailTime: 5,  // 5秒後の画面
thumbnailTime: 30, // 30秒後の画面
```

## 🚀 トラブルシューティング

### ビデオが再生されない場合

1. **Customer Codeが正しいか確認**
   - Cloudflare StreamのビデオURLと一致していますか？

2. **Video IDが正しいか確認**
   - コピー&ペーストミスはありませんか？

3. **Cloudflareの公開設定を確認**
   - ビデオが「Public」に設定されていますか？

### ビデオの表示順序を変更したい場合

`videosData`配列内のオブジェクトの順序を変更してください。配列の最初から順番に表示されます。

## 📚 参考リンク

- [Cloudflare Stream Documentation](https://developers.cloudflare.com/stream/)
- [Stream Player API](https://developers.cloudflare.com/stream/viewing-videos/using-the-stream-player/)
