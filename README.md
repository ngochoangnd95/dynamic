# Vấn đề

Thông thường, chúng ta tạo một form nhập liệu bằng cách code chính xác các hạng mục bằng các thẻ input HTML, hoặc nhanh hơn là sử dụng các thư viện UI như Ant Design, Material, Mantine,... Tuy nhiên, ngay cả khi chúng ta sử dụng các thư viện UI để dựng nhanh màn hình nhập liệu, chúng ta vẫn phải đối mặt với nhiều vấn đề:

- Tạo thêm nhiều logic để điều khiển các input component.

- Các logic thường nhỏ nhưng lặp đi lặp lại nhiều.

- Các logic nằm rời rạc ở các component khác nhau. Mặc dù trong các dự án, người ta cố gắng tạo các component dùng chung hay các logic chia sẻ để tăng khả năng tái sử dụng code, tuy nhiên những code đó thường được sinh ra trong tình thế bị động, không đủ phổ quát để áp dụng cho mọi màn hình. Chưa kể, nếu dự án đó đã phát triển trong thời gian dài mà không được làm sạch hay refactor, thì càng có ít khả năng có thể làm được điều đó.

Chán cảnh suốt ngày phải code lặp đi lặp lại và fix những bug rất dở hơi do sự chủ quan của người đi trước, tôi quyết tâm xây dựng một codebase sao cho đáp ứng các yêu cầu:

- Đơn giản hoá cách sử dụng và cài đặt (implement) các loại input component.

- Nhất quán các xử lý logic giữa các loại input component. Khi đó chúng ta không cần quan tâm nhiều vào các logic cơ bản như get, set value cho input, validate và hiển thị lỗi validate, chỉ cần tập trung vào phát triển logic nghiệp vụ.

- Vừa có khả năng tuỳ biến mạnh mẽ, vừa giữ được tính nhất quán và bảo tồn các logic đã xây dựng sẵn.

# Giải pháp

Tôi may mắn được tiếp cận với câu trả lời cho vấn đề này từ dự án đầu tiên của tôi cách đây 3 năm, đó là xây dựng bộ UI component phân loại theo loại field, nhằm đáp ứng khả năng render field động.

```
<DynamicField { type } />
│ (dựa vào type)
│
├── <Text />        \
├── <Number />       \
├── <Select />        } input components
├── <Date />         /
└── ...             /
```

Component `DynamicField` sẽ đóng vai trò như lớp giao tiếp bậc cao. Developer chỉ cần sử dụng component này và truyền vào nó định nghĩa về field. Định nghĩa field là các thông tin về field như:

- Field name
- Field type
- Field label
- và các thông tin tuỳ chọn khác

Tuy nhiên vào thời điểm đó, chúng tôi không sử dụng thư viện UI nào mà chỉ sử dụng thuần thư viện React và các thẻ HTML. Điều này tạo ra gánh nặng cho chúng tôi phải xử lý nhiều logic ở tầng dưới (các input component). Dần dần theo thời gian, các logic trở nên chồng chéo, phức tạp, gây "ô nhiễm" lên thượng tầng và phá hỏng tính sạch sẽ mà chúng tôi gây dựng ban đầu.

Hai năm sau, tôi tiếp xúc với các thư viện UI mới như Material, Ant Design, Chakra UI, Mantine. Tôi đã thử tái dựng lại bộ UI component đó trên cơ sở sử dụng các input component mà Material cung cấp, tuy nhiên vẫn gặp nhiều bất cập. Rất khó để xây dựng một interface thuần nhất giữa các loại input khác nhau của Material, vẫn phải tự customize nhiều. May thay, Ant Design đã làm trọn vẹn được điều tôi muốn.

Có 3 ưu điểm vượt trội của Ant Design nếu so sánh với Material:

- Ant Design có sẵn tính năng quản lý form. Chỉ cần đặt input component vào component `Form.Item`, các props như value, onChange,... sẽ liên kết ngầm với input component. Tất cả giá trị của form có thể đọc và ghi thông qua một đối tượng duy nhất, trả về từ hook `Form.useForm()`. Bên cạnh đó, Form của Ant Design cung cấp sẵn cơ chế validate bằng cách truyền `rules`. Material không có những tính năng này, mà thường phải kết hợp với thư viện khác để quản lý form, ví dụ như combo Material + React Hook Form + Yup.

- Interface cũng như tài liệu hướng dẫn sử dụng của Ant Design rõ ràng và tường minh hơn Material. Tôi đã từng gặp rắc rối khi nhầm lẫn Date picker của MUI X, MUI lab, Material-ui, react-datepicker.

- Ant Design cân bằng được giữa sự sử dụng đơn giản với khả năng tuỳ biến. Ví dụ component `Select`, cách sử dụng đơn giản nhất đó là truyền mảng `options` vào, nhưng bạn vẫn có nhiều lựa chọn tuỳ biến như `dropdownRender`, `optionFilterProps`,... rồi mới đến biện pháp cuối cùng là custom render bằng `children`. Với component `Select` của Material, bạn không có nhiều lựa chọn như vậy, mà phải trực tiếp render từng `MenuItem`.

Với sự trợ giúp đắc lực của Ant Design, tôi đã xây dựng được codebase cân bằng được sự đơn giản, đồng nhất, tường minh mà vẫn đem lại khả năng tuỳ biến cao. Các bạn có thể xem demo tại link []() và xem code mẫu tại file [App.tsx](apps/app/src/App.tsx).

# Nguyên liệu

1. [Ant Design](https://ant.design/components/overview) (v^5)
2. [Turborepo](https://turbo.build/repo)
3. [Vite](https://vitejs.dev/) + React
4. Yarn hoặc npm (ở đây tôi chọn yarn)

# Bắt đầu

1. Clone git:

    ```bash
    git clone https://github.com/ngochoangnd95/dynamic.git
    cd dynamic/
    ```

2. Cài đặt phụ thuộc:

    ```bash
    yarn install
    ```

3. Khởi động ứng dụng:

    ```bash
    yarn run dev
    ```
    Ứng dụng sẽ chạy ở địa chỉ [http:127.0.0.1:5173](http:127.0.0.1:5173)

4. Cách cài đặt thư viện:

    ```bash
    # yarn workspace <workspace> add <package>
    yarn workspace app add react-router-dom
    yarn workspace ui add sass --dev
    ```

Chi tiết cách sử dụng Turborepo mời các bạn tham khảo [document](https://turbo.build/repo/docs) chính thức của Turborepo, hoặc tham khảo bài viết trên [Notion](https://hoangtv.notion.site/Coding-911ab28cf8f74b63b2f213cfcac98091) cá nhân của tôi.