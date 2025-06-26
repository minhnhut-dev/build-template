# GitHub Workflow Setup

## Workflow đơn giản - 2 bước

Workflow này sẽ:
1. Pull code từ branch master
2. SSH vào server và chạy `git pull && yarn run build`

## Secrets cần thiết

Để workflow deploy hoạt động, bạn cần setup các secrets sau trong GitHub repository:

### Server Configuration
- `SERVER_HOST`: IP address hoặc domain của server
- `SERVER_USERNAME`: Username để SSH vào server
- `SERVER_SSH_KEY`: Private SSH key để kết nối server
- `SERVER_PORT`: Port SSH (thường là 22)
- `PROJECT_PATH`: Đường dẫn đến thư mục project trên server (ví dụ: `/home/user/project`)

## Cách setup Secrets

1. Vào GitHub repository
2. Chọn Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Thêm từng secret với key và value tương ứng

## SSH Key Setup

1. Tạo SSH key pair:
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions"
```

2. Copy public key vào server:
```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub username@server
```

3. Copy private key content vào GitHub secret `SERVER_SSH_KEY`

## Cấu hình Server

1. Đảm bảo server đã cài đặt:
   - Git
   - Node.js
   - Yarn
   - SSH access

2. Clone repository lên server:
```bash
git clone https://github.com/your-username/your-repo.git /path/to/project
```

3. Setup SSH key để server có thể pull code:
```bash
# Tạo deploy key hoặc sử dụng personal access token
```

## Workflow hoạt động

1. Khi push code lên branch `master`
2. GitHub Actions checkout code từ branch master
3. SSH vào server
4. Di chuyển đến thư mục project
5. Chạy `git pull origin master`
6. Chạy `yarn install`
7. Chạy `yarn run build`

## Troubleshooting

- Kiểm tra SSH connection: `ssh username@server`
- Kiểm tra đường dẫn project: `ls -la $PROJECT_PATH`
- Kiểm tra Git status: `git status`
- Kiểm tra Yarn: `yarn --version` 