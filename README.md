# Bookmarklet

## Redash json valueの一括展開

```
javascript:(function(){ const s = document.createElement('script'); s.src = 'https://d1i7g5i1n6yjvy.cloudfront.net/bookmarklets/redash_json_value_open.js'; document.body.appendChild(s); })();
```

![text](images/redash_json_value_open.gif "alt")

## Redash セレクトボックス全選択

```
javascript:(function(){ const s = document.createElement('script'); s.src = 'https://d1i7g5i1n6yjvy.cloudfront.net/bookmarklets/redash_all_select_item.js'; document.body.appendChild(s); })();
```

デフォルトだと1件しか選択されていない状態なので全選択させる + 枠のサイズをスクロール可能にして狭める

# development

```
thin start --ssl -R app.ru
```

サーバへアクセスするとこのREADMEのホストをプライベートIPに変えたものが出力されるのでそれをブックマークに登録して開発する

