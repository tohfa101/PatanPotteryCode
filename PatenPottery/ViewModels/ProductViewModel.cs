﻿namespace PatenPottery.ViewModels
{
    public class ProductViewModel
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public IFormFile Image { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
    }
}
