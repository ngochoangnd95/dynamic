# Triết lý

Có 3 nguyên lý mà tôi tự đề ra khi xây dựng Dynamic codebase này:

## Tôn trọng tối đa các API mà thư viện gốc cung cấp

Trong lý thuyết về sự phức tạp của một hệ thống, sự phức tạp là bất cứ điều gì liên quan đến cấu trúc của một hệ thống, ngăn cản bạn hay bất cứ ai cố gắng hiểu hay thay đổi vào hệ thống đó.

Sự phức tạp đến từ rất nhiều nguồn:

- Thiếu nhất quán, chỗ này code thế này, chỗ kia code thế khác.
- Code thiếu tường minh, lạm dụng if...else quá nhiều.
- Tuỳ tiện đặt thêm biến, prop không cần thiết. Điển hình như ví dụ sau:
  ```js
    <CustomDatePicker
      valueDefault={valueDefault}

    │
    └──>  const [value, setValue] = useState('')
          useEffect(() => {
            setValue(props.valueDefault)
          }, [props.valueDefault])

          ...
          <DatePicker
            value={value}
  ```

Tôn trọng tối đa tức là cố gắng giữ nguyên tên các prop truyền vào các component của thư viện gốc mà mình sử dụng. Một khi bám sát vào các prop của các component gốc, bạn sẽ không mất công ghi nhớ hay truy vết xem prop này là gì, từ đâu đến nữa.

## Tận dụng tối đa các API mà thư viện gốc cung cấp.

Tận dụng tối đa là làm sao khai thác triệt để các tính năng của các component được sử dụng. Trong interface của DynamicField, có một prop là `inputProps`. Nó dùng để chứa tất cả các prop mà bạn cần truyền cho input component.

```typescript
{
  type: FIELD_TYPE.SELECT,
  inputProps: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]
  }
}

│
└──>  <Select {...inputProps}>
```

Nhờ đó tôi có thể tận dụng tối đa các tính năng của component, đồng thời vẫn bảo tồn được interface chung duy nhất, không phát sinh thêm prop cũng như không bị lệ thuộc vào input component được sử dụng đằng sau.

Có thể coi đây như là mở rộng của nguyên lý số 2 trong SOLID, nguyên lý đóng/mở, áp dụng cho phía frontend.

## Nên có nhiều cấp độ tuỳ biến để thích ứng với nhiều yêu cầu tuỳ biến khác nhau

Hãy lấy component `Select` của Ant Design làm ví dụ. Mặc định bạn chỉ cần truyền mảng `options` chứa định nghĩa về các option, bao gồm value và label là đủ. Bạn muốn custom hiển thị label? Label đâu nhất thiết phải là string đâu, nó nhận kiểu ReactNode được mà. Bạn muốn tuỳ biến thêm cho dropdown có checkbox "Select all" chẳng hạn, dùng prop `dropdownRender` là đủ. Trong trường hợp bạn muốn custom lại logic và cách hiển thị từng item trong dropdown, bạn có thể chủ động render từng chiếc `Select.Option` trong `children`.

Qua đó có thể thấy một thư viện tốt là một thư viện đem lại nhiều lựa chọn tuỳ biến, tuỳ vào mức độ tuỳ biến đến đâu, phạm vi như thế nào.

Ở phạm vi DynamicField, việc tôi tận dụng tối đa các API của các component đã là tận dụng được các khả năng tuỳ biến của thư viện. Tuy nhiên như thế là chưa đủ. Với những người mới làm quen Ant Design, ngay cả với những người có kinh nghiệm 1-2 năm với Ant Design rồi, chưa chắc đã biết hết các tính năng cũng như khả năng tuỳ biến của nó. Do đó để chứng minh khả năng đáp ứng của codebase này, tôi bổ sung thêm một số mẫu ví dụ tuỳ biến để các bạn tham khảo.

```plaintext
▲       -------------------------------
| (3)    components (apps/app/components)
|       -------------------------------
| (2)    shared components (packages/ui/shared)
|       -------------------------------
| (1)    DynamicForm - DynamicField (packages/ui/common)
|       -------------------------------
         input components (Ant Design)
```

Tôi phân hoá sự tuỳ biến thành 3 tầng cấp độ:

1. DynamicForm - DynamicField: là những component cơ bản, đã được tôi xây dựng dựa trên nền tảng là các input component của Ant Design. Thay vì làm việc trực tiếp với từng loại input, bạn có thể tạo nhanh một form thông qua một đầu mối duy nhất đó là DynamicForm. Ở cấp độ này, tôi có thay đổi nhẹ một vài giá trị mặc định của các input component. Bạn có thể đổi lại chúng trong file "packages/ui/common/dynamic-form/dynamic-field/constant.ts".

2. Shared components: là những component đã được customize hoá, nhưng trở thành component dùng chung cho tất cả các ứng dụng trong thư mục "apps".

3. Components: là những component đã được customize hoá, chỉ dùng bên trong một ứng dụng.