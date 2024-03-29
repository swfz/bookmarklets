# Bookmarklet

## 1. Redash json valueの一括展開

```
javascript:(function(){ const s = document.createElement('script'); s.src = 'https://d1i7g5i1n6yjvy.cloudfront.net/bookmarklets/redash_json_value_open.js'; document.body.appendChild(s); })();
```

![text](images/redash_json_value_open.gif "alt")

## 2. Redash セレクトボックス全選択

```
javascript:(function(){ const s = document.createElement('script'); s.src = 'https://d1i7g5i1n6yjvy.cloudfront.net/bookmarklets/redash_all_select_item.js'; document.body.appendChild(s); })();
```

デフォルトだと1件しか選択されていない状態なので全選択させる + 枠のサイズをスクロール可能にして狭める

## 3. Google Slide のユーザーツールで質問のリストを購読する

```
javascript:(function(){ const s = document.createElement('script'); s.src = 'https://d1i7g5i1n6yjvy.cloudfront.net/bookmarklets/google_slide_usertool_subscriber.js'; document.body.appendChild(s); })();
```

`4.`とセット、こちらは購読側


## 4. Google Slide のユーザーツールで投稿された質問を直接スライド上に流す

```
javascript:(function(){ const s = document.createElement('script'); s.src = 'https://d1i7g5i1n6yjvy.cloudfront.net/bookmarklets/google_slide_usertool_stream.js'; document.body.appendChild(s); })();
```

`3.`とセット、こちらは流す側

![イメージ図](images/google_slide_usertool.gif "alt")

# development

```shell
$ openssl genrsa 2048 > localhost.key
$ openssl req -new -x509 -nodes -sha256 -days 365 -key localhost.key -out localhost.crt

Country Name (2 letter code) [AU]:
...
Common Name: localhost
...

$ thin start --ssl --ssl-disable-verify --ssl-key-file=localhost.key --ssl-cert-file=localhost.crt -R app.ru
```

サーバへアクセスするとこのREADMEのホストをプライベートIPに変えたものが出力されるのでそれをブックマークに登録して開発する

# deploy

```
$ aws s3 sync bookmarklets s3://swfz-bookmarklets/bookmarklets/ --delete
$ export DISTRIBUTION_ID=$(aws cloudfront list-distributions --query 'DistributionList.Items[]' | jq -r '.[]|select(.DomainName="d1i7g5i1n6yjvy.cloudfront.net")|.Id')
$ export INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths "/*" | jq -r '.Invalidation.Id')
$ aws cloudfront get-invalidation --distribution-id ${DISTRIBUTION_ID} --id ${INVALIDATION_ID}
```
