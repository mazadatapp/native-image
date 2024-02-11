@objc(NativeImageViewManager)
class NativeImageViewManager: RCTViewManager {
    
    override func view() -> (NativeImageView) {
        return NativeImageView()
    }
    
    @objc override static func requiresMainQueueSetup() -> Bool {
        return false
    }
}

class NativeImageView : UIImageView {
    
    @objc var url: String = "" {
        didSet {
            contentMode = .scaleAspectFit
            if(url.contains("https://") || url.contains("http://")){
                kf.setImage(with: URL(string: url))
            }else{
                var originalPath=url
                if(!url.contains("file://")){
                    originalPath = "file://"+url
                }
                image = UIImage(contentsOfFile: originalPath)!
            }
        }
    }
    
    @objc var radius: String = "" {
        didSet {
            layer.cornerRadius = CGFloat((radius as NSString).floatValue)
            layer.masksToBounds = true
        }
    }
    
    
    
    func hexStringToUIColor(hexColor: String) -> UIColor {
        let stringScanner = Scanner(string: hexColor)
        
        if(hexColor.hasPrefix("#")) {
            stringScanner.scanLocation = 1
        }
        var color: UInt32 = 0
        stringScanner.scanHexInt32(&color)
        
        let r = CGFloat(Int(color >> 16) & 0x000000FF)
        let g = CGFloat(Int(color >> 8) & 0x000000FF)
        let b = CGFloat(Int(color) & 0x000000FF)
        
        return UIColor(red: r / 255.0, green: g / 255.0, blue: b / 255.0, alpha: 1)
    }
}
