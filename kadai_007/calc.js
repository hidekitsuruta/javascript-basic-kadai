let num = Math.floor(Math.random() * 30)+1;

// 変数numの値が3の倍数かつ5の倍数の場合、「3と5の倍数です」という文字列を出力する
if (num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です');
}

// 変数numの値が3の倍数であれば、「3の倍数です」という文字列を出力する
else if (num % 3 == 0) {
    console.log('3の倍数です');
  }

// 変数numの値が5であれば、「5の倍数です」という文字列を出力する
else if (num % 5 == 0) {
    console.log('5の倍数です');
  }

// それ以外のときは、変数numの値を出力する
else {
    console.log(num);
  }